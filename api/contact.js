const { Resend } = require('resend');
const crypto = require('crypto');
const { createAuditLog } = require('../lib/auditLogger');

const resend = new Resend(process.env.RESEND_API_KEY);

// Lista estrita de origens permitidas (Zero Trust: NUNCA usar wildcard *)
const ALLOWED_ORIGINS = [
  'https://portifolio-gules-tau.vercel.app',
  'http://localhost:5173',
  'http://localhost:4173',
  'http://127.0.0.1:5173'
];

// Cache em memória para Rate Limiting na instância Serverless
// Limite: 3 mensagens a cada 5 minutos por IP
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 5 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 3;

function checkRateLimit(ip) {
  const now = Date.now();
  for (const [key, data] of rateLimitMap.entries()) {
    if (now - data.resetTime > RATE_LIMIT_WINDOW) rateLimitMap.delete(key);
  }
  const record = rateLimitMap.get(ip) || { count: 0, resetTime: now };
  if (now - record.resetTime > RATE_LIMIT_WINDOW) {
    record.count = 1;
    record.resetTime = now;
    rateLimitMap.set(ip, record);
    return true;
  }
  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }
  record.count += 1;
  rateLimitMap.set(ip, record);
  return true;
}

// Sanitização estrita contra HTML Injection / XSS em e-mails
function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Remoção de quebras de linha para impedir CRLF Header Injection
function sanitizeSingleLine(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/[\r\n\t]+/g, ' ').trim();
}

module.exports = async (req, res) => {
  const correlationId = req.headers['x-correlation-id'] || crypto.randomUUID();
  const clientIp = (
    req.headers['x-forwarded-for'] ||
    req.headers['x-real-ip'] ||
    req.socket?.remoteAddress ||
    '127.0.0.1'
  ).split(',')[0].trim();

  // 1. Validação Estrita de CORS (sem wildcard *)
  const origin = req.headers['origin'];
  if (origin) {
    if (ALLOWED_ORIGINS.includes(origin)) {
      res.setHeader('Access-Control-Allow-Origin', origin);
      res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Correlation-ID');
    } else {
      console.warn(createAuditLog({
        action: 'CORS_REQUEST_BLOCKED',
        ip: clientIp,
        correlationId,
        status: 'BLOCKED',
        details: { blockedOrigin: origin }
      }));
      return res.status(403).json({ error: 'Origem não permitida (CORS).' });
    }
  }

  // Preflight request
  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido.' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
    const { name, email, message, company_hp } = body;

    // 2. Defesa Anti-Bot Silenciosa (Honeypot)
    if (company_hp && String(company_hp).trim() !== '') {
      console.log(createAuditLog({
        action: 'SPAMBOT_SILENT_DISCARD',
        ip: clientIp,
        correlationId,
        status: 'BLOCKED',
        details: { honeypotTriggered: true }
      }));
      return res.status(200).json({ success: true, message: 'Mensagem recebida.' });
    }

    // 3. Rate Limiting por IP
    if (!checkRateLimit(clientIp)) {
      res.setHeader('Retry-After', '300');
      console.warn(createAuditLog({
        action: 'RATE_LIMIT_EXCEEDED',
        ip: clientIp,
        correlationId,
        status: 'BLOCKED',
        details: { retryAfterSeconds: 300 }
      }));
      return res.status(429).json({
        error: 'Muitas mensagens enviadas recentemente. Por favor, aguarde alguns minutos antes de tentar novamente.'
      });
    }

    // 4. Validação de campos obrigatórios
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Faltam campos obrigatórios.' });
    }

    // 5. Sanitização e Validação de Limites de Dados
    const cleanRawName = sanitizeSingleLine(String(name));
    const cleanRawEmail = sanitizeSingleLine(String(email));
    const rawMessage = String(message).trim();

    if (cleanRawName.length < 2 || cleanRawName.length > 100) {
      return res.status(400).json({ error: 'O nome deve ter entre 2 e 100 caracteres.' });
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (cleanRawEmail.length > 150 || !emailRegex.test(cleanRawEmail)) {
      return res.status(400).json({ error: 'Por favor, informe um endereço de e-mail válido.' });
    }

    if (rawMessage.length < 5 || rawMessage.length > 3000) {
      return res.status(400).json({ error: 'A mensagem deve ter entre 5 e 3000 caracteres.' });
    }

    // 6. Escapar strings para uso seguro no HTML do e-mail
    const safeName = escapeHtml(cleanRawName);
    const safeEmail = escapeHtml(cleanRawEmail);
    const safeMessage = escapeHtml(rawMessage);

    const notificationHtml = `
      <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f5; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          <h2 style="color: #6366f1; text-align: center;">Novo Contato via Portfólio</h2>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
          <p><strong>Nome:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Mensagem:</strong></p>
          <div style="background-color: #f9fafb; padding: 15px; border-left: 4px solid #6366f1; border-radius: 4px; white-space: pre-wrap;">${safeMessage}</div>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="font-size: 12px; color: #999; text-align: center;">Sistema de Mensagens - Portfólio Leo Carvalho</p>
        </div>
      </div>
    `;

    const { data: notificationData, error: notificationError } = await resend.emails.send({
      from: 'Portfólio <onboarding@resend.dev>',
      to: ['dev.leocarvalho@gmail.com'],
      subject: `[Portfólio] Novo Contato de: ${safeName}`,
      html: notificationHtml
    });

    if (notificationError) {
      console.error(createAuditLog({
        action: 'RESEND_NOTIFICATION_ERROR',
        ip: clientIp,
        correlationId,
        status: 'FAILURE',
        details: { error: notificationError.message }
      }));
      return res.status(400).json({ error: notificationError.message });
    }

    const autoReplyHtml = `
      <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f5; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; background: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); text-align: center;">
          <h2 style="color: #6366f1;">Olá, ${safeName}!</h2>
          <p style="font-size: 16px; line-height: 1.5; color: #555;">Muito obrigado por entrar em contato através do meu portfólio. Recebi sua mensagem com sucesso e já estou avaliando.</p>
          <p style="font-size: 16px; line-height: 1.5; color: #555;">Em breve retornarei o seu contato para conversarmos melhor sobre o seu projeto ou ideia.</p>
          <br/>
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
          <p style="font-size: 14px; color: #666; text-align: left;">Atenciosamente,<br/><strong>Leonardo de Carvalho</strong><br/>Desenvolvedor Full Stack & Analista de Sistemas<br/>dev.leocarvalho@gmail.com</p>
        </div>
      </div>
    `;

    try {
      await resend.emails.send({
        from: 'Leo Carvalho <onboarding@resend.dev>',
        to: [cleanRawEmail],
        subject: 'Recebi sua mensagem! - Leo Carvalho',
        html: autoReplyHtml
      });
    } catch (autoReplyErr) {
      console.warn(createAuditLog({
        action: 'RESEND_AUTOREPLY_ERROR',
        ip: clientIp,
        correlationId,
        status: 'FAILURE',
        details: { error: autoReplyErr.message }
      }));
    }

    // Log de auditoria de sucesso (LGPD: com dados mascarados se houver PII sensível)
    console.log(createAuditLog({
      action: 'CONTACT_FORM_SUCCESS',
      ip: clientIp,
      correlationId,
      status: 'SUCCESS',
      details: { senderName: safeName, emailDomain: safeEmail.split('@')[1] }
    }));

    return res.status(200).json({ success: true, message: 'Emails enviados com sucesso.' });
  } catch (error) {
    console.error(createAuditLog({
      action: 'SERVER_INTERNAL_ERROR',
      ip: clientIp,
      correlationId,
      status: 'FAILURE',
      details: { errorMessage: error.message }
    }));
    return res.status(500).json({ error: 'Ocorreu um erro interno no servidor.' });
  }
};
