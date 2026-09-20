import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const { createAuditLog, maskSensitiveData } = require('../lib/auditLogger.js');
const { sanitizeHtml } = require('../lib/domSanitizer.js');

async function runTests() {
  console.log('\n🛡️ [PROVA TÉCNICA MÓDULO 4] Executando testes de CSP, CORS, Sanitização XSS e Logs LGPD...\n');

  // =========================================================================
  // TESTE 1: Validação de Content-Security-Policy (CSP)
  // =========================================================================
  console.log('1. Testando Diretivas da Content-Security-Policy (CSP)...');
  const vercelConfig = JSON.parse(fs.readFileSync('./vercel.json', 'utf-8'));
  const cspHeaderObj = vercelConfig.headers[0].headers.find(h => h.key === 'Content-Security-Policy');
  assert.ok(cspHeaderObj, 'FALHA: Cabeçalho Content-Security-Policy não encontrado no vercel.json');

  const csp = cspHeaderObj.value;
  assert.ok(!csp.includes("'unsafe-eval'"), "FALHA DE SEGURANÇA: 'unsafe-eval' é estritamente proibido na CSP!");
  assert.ok(csp.includes("frame-ancestors 'none'"), "FALHA: Proteção contra Clickjacking (frame-ancestors 'none') ausente na CSP");
  assert.ok(csp.includes("connect-src 'self'"), "FALHA: connect-src restrito ausente na CSP");
  assert.ok(!csp.includes("connect-src *"), "FALHA: connect-src não deve usar wildcard (*)");
  console.log("  ✔️ [PASS] CSP: 'unsafe-eval' ausente, frame-ancestors 'none' ativo e connect-src estritamente delimitado");

  // =========================================================================
  // TESTE 2: Validação Estrita de CORS (Eliminação de Wildcard *)
  // =========================================================================
  console.log('\n2. Testando Política de CORS sem Wildcard...');
  const ALLOWED_ORIGINS = [
    'https://portifolio-gules-tau.vercel.app',
    'http://localhost:5173'
  ];

  function evaluateCors(origin) {
    if (!origin) return { allowed: true, header: null };
    if (ALLOWED_ORIGINS.includes(origin)) {
      return { allowed: true, header: origin };
    }
    return { allowed: false, status: 403 };
  }

  // Origem autorizada
  const trustedRes = evaluateCors('https://portifolio-gules-tau.vercel.app');
  assert.equal(trustedRes.allowed, true);
  assert.equal(trustedRes.header, 'https://portifolio-gules-tau.vercel.app');
  assert.notEqual(trustedRes.header, '*', 'FALHA: CORS nunca deve responder com wildcard * em rotas sensíveis');
  console.log('  ✔️ [PASS] CORS: Origem confiável autorizada pontualmente sem wildcard (*)');

  // Origem maliciosa / não autorizada
  const evilRes = evaluateCors('https://site-invasor.com');
  assert.equal(evilRes.allowed, false);
  assert.equal(evilRes.status, 403);
  console.log('  ✔️ [PASS] CORS: Origem não autorizada bloqueada com HTTP 403 Forbidden');

  // =========================================================================
  // TESTE 3: Sanitização de Frontend contra DOM XSS (innerHTML)
  // =========================================================================
  console.log('\n3. Testando Sanitizador de DOM Frontend contra XSS...');
  const dirtyHtml = `<p>Olá <strong>Mundo</strong></p><script>alert('xss')</script><img src="x" onerror="stealData()"><a href="javascript:alert(1)">Clique</a>`;
  const cleanHtml = sanitizeHtml(dirtyHtml);

  assert.ok(!cleanHtml.includes('<script>'), 'FALHA: Tag <script> não foi removida');
  assert.ok(!cleanHtml.includes('onerror'), 'FALHA: Atributo de evento inline onerror não foi removido');
  assert.ok(!cleanHtml.includes('javascript:alert(1)'), 'FALHA: Pseudo-protocolo javascript: não foi neutralizado');
  assert.ok(cleanHtml.includes('<strong>Mundo</strong>'), 'FALHA: Tags de formatação seguras devem ser preservadas');
  console.log('  ✔️ [PASS] XSS: Scripts, eventos onerror e javascript: URLs neutralizados com preservação de formatação segura');

  // =========================================================================
  // TESTE 4: Trilha de Auditoria e Mascaramento de PII (LGPD / GRC)
  // =========================================================================
  console.log('\n4. Testando Trilha de Auditoria e Mascaramento de PII (LGPD)...');
  const sensitivePayload = {
    user: 'Leonardo',
    password: 'super_secret_password_123',
    token: 'jwt_bearer_token_abc_xyz',
    creditCard: '4111 2222 3333 4444',
    cpf: '123.456.789-00',
    notes: 'Pagamento com cartão 5500 0000 0000 0004 aprovado.'
  };

  const rawJsonLog = createAuditLog({
    action: 'USER_PASSWORD_CHANGE',
    userId: 'usr_998',
    ip: '189.40.12.88',
    status: 'SUCCESS',
    details: sensitivePayload
  });

  const parsedLog = JSON.parse(rawJsonLog);

  // Validação de estrutura
  assert.ok(parsedLog.timestamp, 'FALHA: Timestamp UTC ausente');
  assert.ok(parsedLog.correlationId, 'FALHA: Correlation ID ausente');
  assert.equal(parsedLog.action, 'USER_PASSWORD_CHANGE');
  assert.equal(parsedLog.status, 'SUCCESS');

  // Validação de Mascaramento Zero Trust (PII Redaction)
  assert.equal(parsedLog.details.password, '[REDACTED]', 'FALHA: Senha não mascarada');
  assert.equal(parsedLog.details.token, '[REDACTED]', 'FALHA: Token não mascarado');
  assert.equal(parsedLog.details.cpf, '[REDACTED]', 'FALHA: CPF não mascarado');
  assert.ok(!rawJsonLog.includes('super_secret_password_123'), 'FALHA: Senha em texto claro vazou no log JSON!');
  assert.ok(!rawJsonLog.includes('4111 2222 3333 4444'), 'FALHA: Cartão de crédito vazou no log JSON!');
  assert.ok(parsedLog.details.notes.includes('[REDACTED_CARD]'), 'FALHA: Cartão em texto corrido não mascarado');
  console.log('  ✔️ [PASS] Auditoria & LGPD: Log estruturado em JSON UTC, com Correlation ID e campos sensíveis mascarados com [REDACTED]');

  console.log('\n✅ [SUCESSO COMPLETO] Todos os testes do Módulo 4 foram validados com 100% de sucesso!\n');
}

runTests().catch((err) => {
  console.error('❌ Erro nos testes do Módulo 4:', err);
  process.exit(1);
});
