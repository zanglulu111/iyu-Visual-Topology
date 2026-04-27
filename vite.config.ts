import path from 'path';
import fs from 'fs';
import { defineConfig, loadEnv, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import http from 'http';
import https from 'https';
import { URL } from 'url';

const FILE_PREFERRED_ENV_KEYS = [
  'LOVART_ACCESS_KEY',
  'LOVART_SECRET_KEY',
  'LOVART_BASE_URL',
  'LOVART_PROJECT_ID'
];

function readRootEnvFile(root: string): Record<string, string> {
  const envPath = path.resolve(root, '.env');
  if (!fs.existsSync(envPath)) return {};

  const result: Record<string, string> = {};
  const lines = fs.readFileSync(envPath, 'utf8').split(/\r?\n/);
  for (const line of lines) {
    const match = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)\s*$/);
    if (!match) continue;
    let value = match[2].trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    result[match[1]] = value;
  }
  return result;
}

function preferFileLovartEnv(env: Record<string, string>, root: string) {
  const fileEnv = readRootEnvFile(root);
  for (const key of FILE_PREFERRED_ENV_KEYS) {
    if (fileEnv[key]) env[key] = fileEnv[key];
  }
  return env;
}

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

function localApiPlugin(): Plugin {
  return {
    name: 'local-api-routes',
    configureServer(server) {
      server.middlewares.use('/api/lovart-generate', async (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ error: 'Method Not Allowed' }));
          return;
        }

        try {
          const chunks: Buffer[] = [];
          for await (const chunk of req) {
            chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
          }

          const rawBody = Buffer.concat(chunks).toString('utf8');
          const body = rawBody ? JSON.parse(rawBody) : {};
          const { default: handler } = await import('./api/lovart-generate.js');

          await handler(
            { method: req.method, headers: req.headers, body },
            {
              status(code: number) {
                res.statusCode = code;
                return this;
              },
              json(payload: unknown) {
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(payload));
              }
            }
          );
        } catch (error: any) {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ error: error?.message || 'Local API route failed' }));
        }
      });
    }
  };
}

export default defineConfig(({ mode }) => {
    const env = preferFileLovartEnv(loadEnv(mode, '.', ''), '.');
    Object.assign(process.env, env);
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react(), apiProxyPlugin(), localApiPlugin()],
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
