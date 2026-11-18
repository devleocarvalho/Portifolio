const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

// Rate limiting em memória por IP (proteção contra flooding/DoS em instâncias quentes)
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const RATE_LIMIT_MAX_REQ = 5;
const ipRequestLog = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const timestamps = (ipRequestLog.get(ip) || []).filter(ts => now - ts < RATE_LIMIT_WINDOW_MS);
  if (timestamps.length >= RATE_LIMIT_MAX_REQ) {
    ipRequestLog.set(ip, timestamps);
    return true;
  }
  timestamps.push(now);
  ipRequestLog.set(ip, timestamps);
  return false;
}

// Sanitização estrita contra HTML Injection / XSS em templates de e-mail
function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Prevenção contra CRLF / Email Header Injection no campo Subject
function sanitizeHeaderValue(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/[\r\n]+/g, ' ').trim();
}

const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const ALLOWED_FIELDS = new Set(['name', 'email', 'message', 'company_hp']);

module.exports = async (req, res) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido.' });
  }

  try {
    const clientIp = (req.headers?.['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown')
      .toString()
      .split(',')[0]
      .trim();

    if (isRateLimited(clientIp)) {
      return res.status(429).json({ error: 'Muitas tentativas. Aguarde um minuto e tente novamente.' });
    }

    const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
    if (!body || typeof body !== 'object' || Array.isArray(body)) {
      return res.status(400).json({ error: 'Payload inválido.' });
    }

    // Proteção contra Mass Assignment (rejeita propriedades não mapeadas)
    const bodyKeys = Object.keys(body);
    if (!bodyKeys.every(k => ALLOWED_FIELDS.has(k))) {
      return res.status(400).json({ error: 'Campos não autorizados no payload.' });
    }

    const { name, email, message, company_hp } = body;

    // Verificação do campo Honeypot Anti-Spam (se preenchido por bot, descarta silenciosamente)
    if (typeof company_hp === 'string' && company_hp.trim().length > 0) {
      return res.status(200).json({ success: true, message: 'Mensagem processada.' });
    }

    if (typeof name !== 'string' || typeof email !== 'string' || typeof message !== 'string') {
      return res.status(400).json({ error: 'Faltam campos obrigatórios.' });
    }

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      return res.status(400).json({ error: 'Faltam campos obrigatórios.' });
    }

    if (trimmedName.length < 2 || trimmedName.length > 120) {
      return res.status(400).json({ error: 'O nome deve ter entre 2 e 120 caracteres.' });
    }

    if (trimmedEmail.length > 150 || !EMAIL_REGEX.test(trimmedEmail)) {
      return res.status(400).json({ error: 'Formato de e-mail inválido.' });
    }

    if (trimmedMessage.length < 5 || trimmedMessage.length > 3000) {
      return res.status(400).json({ error: 'A mensagem deve ter entre 5 e 3000 caracteres.' });
    }

    const safeName = escapeHtml(trimmedName);
    const safeEmail = escapeHtml(trimmedEmail);
    const safeMessage = escapeHtml(trimmedMessage);
    const safeSubjectName = sanitizeHeaderValue(trimmedName);

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

    const { error: notificationError } = await resend.emails.send({
      from: 'Portfólio <onboarding@resend.dev>',
      to: ['dev.leocarvalho@gmail.com'],
      subject: `[Portfólio] Novo Contato de: ${safeSubjectName}`,
      html: notificationHtml
    });

    if (notificationError) {
      console.error("Erro ao notificar dono:", notificationError);
      return res.status(400).json({ error: 'Não foi possível processar o envio no momento.' });
    }

    const autoReplyHtml = `
      <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f5; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; background: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); text-align: center;">
          <h2 style="color: #6366f1;">Olá, ${safeName}!</h2>
          <p style="font-size: 16px; line-height: 1.5; color: #555;">Muito obrigado por entrar em contato através do meu portfólio. Recebi sua mensagem com sucesso e já estou avaliando.</p>
          <p style="font-size: 16px; line-height: 1.5; color: #555;">Em breve retornarei o seu contato para conversarmos melhor sobre o seu projeto ou ideia.</p>
          <br/>
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
          <p style="font-size: 14px; color: #666; text-align: left;">Atenciosamente,<br/><strong>Leonardo de Carvalho</strong><br/>Desenvolvedor Full Stack, Analista de Sistemas &amp; DevSecOps<br/>dev.leocarvalho@gmail.com</p>
        </div>
      </div>
    `;

    try {
      await resend.emails.send({
        from: 'Leo Carvalho <onboarding@resend.dev>',
        to: [trimmedEmail],
        subject: 'Recebi sua mensagem! - Leo Carvalho',
        html: autoReplyHtml
      });
    } catch (autoReplyErr) {
      console.error("Não foi possível enviar a resposta automática:", autoReplyErr);
    }

    return res.status(200).json({ success: true, message: 'Emails enviados com sucesso.' });
  } catch (error) {
    console.error("Erro interno:", error);
    return res.status(500).json({ error: 'Ocorreu um erro interno no servidor.' });
  }
};
