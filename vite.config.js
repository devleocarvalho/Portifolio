import { defineConfig } from 'vite';

function securityHardeningPlugin() {
  const sensitiveRegex = /(\.env|\.git|\.aws|\.ssh|credentials|secrets|\.pem$|\.key$|\.p8$|serviceAccount)/i;

  const handler = (req, res, next) => {
    // Força nosniff globalmente
    res.setHeader('X-Content-Type-Options', 'nosniff');

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
      'X-Content-Type-Options': 'nosniff'
    }
  },
  preview: {
    headers: {
      'X-Content-Type-Options': 'nosniff'
    }
  }
});

