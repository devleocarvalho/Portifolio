import { defineConfig } from 'vite';

const CSP_POLICY = "default-src 'self'; script-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com https://cdn.jsdelivr.net https://va.vercel-scripts.com; style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com https://fonts.googleapis.com; font-src 'self' https://cdnjs.cloudflare.com https://fonts.gstatic.com data:; img-src 'self' data: https: blob:; connect-src 'self' https://va.vercel-scripts.com https://vitals.vercel-insights.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self' https://wa.me;";

function securityHardeningPlugin() {
  const sensitiveRegex = /(\.env|\.git|\.aws|\.ssh|credentials|secrets|\.pem$|\.key$|\.p8$|serviceAccount)/i;

  const handler = (req, res, next) => {
    // Força cabeçalhos de segurança globalmente
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), interest-cohort=()');
    res.setHeader('Content-Security-Policy', CSP_POLICY);

    const decodedUrl = decodeURIComponent(req.url || '');
    if (sensitiveRegex.test(decodedUrl)) {
      // Zero Trust: NUNCA responder 403; responder 404 sem revelar existência
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain; charset=utf-8');
      res.end('Not Found');
      return;
    }
    next();
  };

  return {
    name: 'vite-plugin-security-hardening',
    configureServer(server) {
      server.middlewares.use(handler);
    },
    configurePreviewServer(server) {
      server.middlewares.use(handler);
    }
  };
}

export default defineConfig({
  plugins: [securityHardeningPlugin()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    emptyOutDir: true,
  },
  server: {
    open: true,
    headers: {
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Content-Security-Policy': CSP_POLICY
    }
  },
  preview: {
    headers: {
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Content-Security-Policy': CSP_POLICY
    }
  }
});
