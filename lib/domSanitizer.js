/**
 * Sanitizador de DOM defensivo para prevenção de XSS no Frontend.
 * Remove scripts, atributos de evento inline (onerror, onload) e protocolos perigosos.
 */
function sanitizeHtml(htmlString) {
  if (typeof htmlString !== 'string') return '';

  // 1. Remove tags executáveis perigosas (<script>, <iframe>, <object>, <embed>, <base>, etc.)
  let clean = htmlString.replace(/<\s*(script|iframe|object|embed|applet|base|form|input|button|link|meta)[^>]*>.*?<\s*\/\s*\1\s*>/gis, '');
  clean = clean.replace(/<\s*(script|iframe|object|embed|applet|base|form|input|button|link|meta)[^>]*>/gis, '');

  // 2. Remove todos os manipuladores de eventos inline (onload, onerror, onclick, etc.)
  clean = clean.replace(/\s+on[a-z]+\s*=\s*(['"]).*?\1/gis, '');
  clean = clean.replace(/\s+on[a-z]+\s*=\s*[^ >]+/gis, '');

  // 3. Remove URLs perigosas em links e imagens (javascript:, data:text/html, vbscript:)
  clean = clean.replace(/href\s*=\s*(['"])\s*(javascript|data|vbscript):.*?\1/gis, 'href="#"');
  clean = clean.replace(/src\s*=\s*(['"])\s*(javascript|vbscript):.*?\1/gis, 'src=""');

  return clean;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { sanitizeHtml };
}
