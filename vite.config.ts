import path from 'path';
import { defineConfig, loadEnv, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import http from 'http';
import https from 'https';
import { URL } from 'url';

function apiProxyPlugin(): Plugin {
  return {
    name: 'generic-api-proxy',
    configureServer(server) {
      server.middlewares.use('/__api_proxy', (req, res) => {
        const targetBase = req.headers['x-proxy-target'] as string | undefined;
        if (!targetBase) {
          res.statusCode = 400;
          res.end(JSON.stringify({ error: 'Missing X-Proxy-Target header' }));
          return;
        }

        const targetUrl = new URL(req.url || '/', targetBase);
        const transport = targetUrl.protocol === 'https:' ? https : http;

        const fwdHeaders: Record<string, string> = {};
        for (const [k, v] of Object.entries(req.headers)) {
          if (['host', 'origin', 'referer', 'x-proxy-target', 'connection'].includes(k)) continue;
          if (v) fwdHeaders[k] = Array.isArray(v) ? v[0] : v;
        }
        fwdHeaders['host'] = targetUrl.host;

        const proxyReq = transport.request(
          targetUrl.href,
          { method: req.method, headers: fwdHeaders },
          (proxyRes) => {
            const respHeaders: Record<string, string | string[]> = {};
            for (const [k, v] of Object.entries(proxyRes.headers)) {
              if (k === 'transfer-encoding') continue;
              if (v) respHeaders[k] = v;
            }
            res.writeHead(proxyRes.statusCode || 502, respHeaders);
            proxyRes.pipe(res);
          }
        );

        proxyReq.on('error', (err) => {
          res.statusCode = 502;
          res.end(JSON.stringify({ error: `Proxy error: ${err.message}` }));
        });

        req.pipe(proxyReq);
      });
    }
  };
}

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react(), apiProxyPlugin()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
