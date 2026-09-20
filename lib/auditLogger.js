const crypto = require('crypto');

/**
 * Padrões de campos sensíveis para mascaramento automático (LGPD / Compliance / OWASP).
 */
const SENSITIVE_KEYS = new Set([
  'password', 'pass', 'senha',
  'token', 'access_token', 'refresh_token', 'auth', 'authorization',
  'apikey', 'api_key', 'secret', 'resend_api_key',
  'creditcard', 'cardnumber', 'card_number', 'cvv', 'cvc',
  'cpf', 'ssn', 'pin', 'rg'
]);

// Regex para identificar números de cartão de crédito no corpo de textos
const CREDIT_CARD_REGEX = /\b(?:\d[ -]*?){13,16}\b/g;

/**
 * Função recursiva de sanitização e mascaramento de PII.
 */
function maskSensitiveData(data) {
  if (data === null || data === undefined) return data;

  if (typeof data === 'string') {
    // Mascara possíveis cartões de crédito em strings
    return data.replace(CREDIT_CARD_REGEX, '[REDACTED_CARD]');
  }

  if (Array.isArray(data)) {
    return data.map(item => maskSensitiveData(item));
  }

  if (typeof data === 'object') {
    const masked = {};
    for (const [key, value] of Object.entries(data)) {
      const lowerKey = key.toLowerCase().replace(/[-_]/g, '');
      if (SENSITIVE_KEYS.has(lowerKey)) {
        masked[key] = '[REDACTED]';
      } else if (typeof value === 'object' && value !== null) {
        masked[key] = maskSensitiveData(value);
      } else if (typeof value === 'string') {
        masked[key] = value.replace(CREDIT_CARD_REGEX, '[REDACTED_CARD]');
      } else {
        masked[key] = value;
      }
    }
    return masked;
  }

  return data;
}

/**
 * Cria uma entrada estruturada de Log de Auditoria em formato JSON (LGPD / GRC).
 * 
 * @param {Object} params
 * @param {string} params.action - Nome da ação (ex: 'CONTACT_FORM_SUBMIT', 'CONFIG_UPDATE')
 * @param {string} [params.userId='anonymous'] - Identificador do usuário
 * @param {string} [params.ip='unknown'] - Endereço IP do cliente
 * @param {string} [params.correlationId] - ID de correlação para rastreamento distribuído
 * @param {string} [params.status='SUCCESS'] - Status ('SUCCESS', 'FAILURE', 'BLOCKED')
 * @param {Object} [params.details={}] - Metadados da operação
 * @returns {string} String JSON pronta para persistência ou stdout
 */
function createAuditLog({
  action,
  userId = 'anonymous',
  ip = 'unknown',
  correlationId = crypto.randomUUID(),
  status = 'SUCCESS',
  details = {}
}) {
  const logEntry = {
    timestamp: new Date().toISOString(), // UTC ISO-8601
    correlationId,
    userId,
    ip,
    action,
    status,
    details: maskSensitiveData(details)
  };

  return JSON.stringify(logEntry);
}

module.exports = {
  maskSensitiveData,
  createAuditLog
};
