import { defineConfig } from 'vite';

const CSP_POLICY = "default-src 'self'; script-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com https://cdn.jsdelivr.net https://va.vercel-scripts.com; style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com https://fonts.googleapis.com; font-src 'self' https://cdnjs.cloudflare.com https://fonts.gstatic.com data:; img-src 'self' data: https: blob:; connect-src 'self' https://va.vercel-scripts.com https://vitals.vercel-insights.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self' https://wa.me;";

function securityHardeningPlugin() {
  const sensitiveRegex = /(\.env|\.git|\.aws|\.ssh|credentials|secrets|\.pem$|\.key$|\.p8$|serviceAccount)/i;

  const handler = (req, res, next) => {
    res.setHeader('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
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
      'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Content-Security-Policy': CSP_POLICY
    }
  },
  preview: {
    headers: {
      'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Content-Security-Policy': CSP_POLICY
    }
  }
});
