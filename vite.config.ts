import path from 'path';
import fs from 'fs';
import { defineConfig, loadEnv, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import http from 'http';
import https from 'https';
import { pathToFileURL, URL } from 'url';

const FILE_PREFERRED_ENV_KEYS = [
  'LOVART_ACCESS_KEY',
  'LOVART_SECRET_KEY',
  'LOVART_BASE_URL',
  'LOVART_PROJECT_ID'
];

const PHILOSOPHER_POSTER_ASSET_DIR = '/Users/lujiaqi/Desktop/哲学海报/哲学家海报/哲学2';

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
      const runJsonApiRoute = async (
        req: any,
        res: any,
        handlerPath: string,
        fallbackError: string
      ) => {
        try {
          const chunks: Buffer[] = [];
          for await (const chunk of req) {
            chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
          }

          const rawBody = Buffer.concat(chunks).toString('utf8');
          const body = rawBody ? JSON.parse(rawBody) : {};
          const handlerUrl = pathToFileURL(path.resolve(handlerPath)).href;
          const { default: handler } = await import(handlerUrl);

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
          res.end(JSON.stringify({ error: error?.message || fallbackError }));
        }
      };

      server.middlewares.use('/api/publish-workspace-sync', async (req, res) => {
        const statePath = path.resolve('.', 'codex-drafts/operations/publish_workspace_state.json');
        res.setHeader('Content-Type', 'application/json');

        try {
          if (req.method === 'GET') {
            if (!fs.existsSync(statePath)) {
              res.statusCode = 200;
              res.end(JSON.stringify({ syncedAt: null, sourceState: {}, plans: [] }));
              return;
            }
            res.statusCode = 200;
            res.end(fs.readFileSync(statePath, 'utf8'));
            return;
          }

          if (req.method !== 'POST') {
            res.statusCode = 405;
            res.end(JSON.stringify({ error: 'Method Not Allowed' }));
            return;
          }

          const chunks: Buffer[] = [];
          for await (const chunk of req) {
            chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
          }

          const rawBody = Buffer.concat(chunks).toString('utf8');
          const body = rawBody ? JSON.parse(rawBody) : {};
          fs.mkdirSync(path.dirname(statePath), { recursive: true });
          fs.writeFileSync(statePath, JSON.stringify({
            syncedAt: new Date().toISOString(),
            ...body,
          }, null, 2));

          res.statusCode = 200;
          res.end(JSON.stringify({ ok: true, path: statePath }));
        } catch (error: any) {
          res.statusCode = 500;
          res.end(JSON.stringify({ error: error?.message || 'Failed to sync publishing workspace' }));
        }
      });

      server.middlewares.use('/api/lovart-generate', async (req, res) => {
        await runJsonApiRoute(req, res, './api/lovart-generate.js', 'Local API route failed');
      });

      server.middlewares.use('/api/get-r2-upload-url', async (req, res) => {
        await runJsonApiRoute(req, res, './api/get-r2-upload-url.js', 'Failed to generate R2 upload URL');
      });

      server.middlewares.use('/api/delete-r2-file', async (req, res) => {
        await runJsonApiRoute(req, res, './api/delete-r2-file.js', 'Failed to delete R2 file');
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
        fs: {
          allow: [
            path.resolve(__dirname),
            PHILOSOPHER_POSTER_ASSET_DIR,
          ],
        },
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
