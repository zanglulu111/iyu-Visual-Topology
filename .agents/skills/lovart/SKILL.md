---
name: lovart
description: Batch Lovart OpenAPI generation for agents. Use when the user wants Codex to control Lovart directly, submit many image/video generation prompts, create or reuse Lovart projects, poll chat threads, collect artifact URLs, download outputs, and write manifests from local .env credentials.
---

# Lovart

Use this skill when the user asks to generate Lovart assets directly or in batches. It wraps the Lovart OpenAPI endpoints already used by this project:

- `POST /v1/openapi/project/save`
- `POST /v1/openapi/chat`
- `GET /v1/openapi/chat/status`
- `GET /v1/openapi/chat/result`

Credentials are read from local environment only. Do not ask the user to paste secrets into chat; prefer `.env`:

```bash
LOVART_ACCESS_KEY=...
LOVART_SECRET_KEY=...
LOVART_BASE_URL=https://lgw.lovart.ai
LOVART_PROJECT_ID=optional_existing_project_id
```

The official Lovart OpenAPI skill is also installed at `.agents/skills/lovart-api`. Use it for interactive one-off generation, upload, confirm, mode switching, and project/thread management. Use this `lovart` skill for JSONL batch production and manifests. The batch script reuses the official `~/.lovart/state.json` active project when no explicit project id is provided.

## Quick Start

Single prompt:

```bash
node .agents/skills/lovart/scripts/lovart_batch.mjs \
  --prompt "Generate a cinematic concept image..." \
  --out outputs/lovart-test \
  --download
```

Batch prompt file:

```bash
node .agents/skills/lovart/scripts/lovart_batch.mjs \
  --input prompts.jsonl \
  --out outputs/lovart-batch \
  --download \
  --concurrency 1
```

Keep `--concurrency 1` unless the user explicitly wants parallel paid generation. Lovart may return `pending_confirmation` for high-cost tasks; surface the returned `canvasUrl` so the user can confirm in Lovart.

## Batch Input

Preferred JSONL, one task per line:

```jsonl
{"id":"hero-001","prompt":"...","attachments":["https://.../ref.png"]}
{"id":"hero-002","prompt":"...","projectId":"optional_project_id"}
```

Also supported:

- JSON array of task objects.
- JSON object with `tasks: [...]`.
- Plain text or Markdown blocks separated by a line containing `---`.

Task fields:

- `id`: optional stable output id.
- `prompt`: required.
- `attachments`: optional array of remote URLs.
- `projectId`: optional Lovart project override.
- `timeoutMs`: optional per-task timeout.
- `preferModels`, `includeTools`, `excludeTools`: optional Lovart tool config.

## Outputs

The script writes:

- `manifest.jsonl`: one JSON record per task result.
- `summary.json`: aggregate success/failure summary.
- `downloads/<task-id>/...`: downloaded image/video/audio artifacts when `--download` is set.

If a task fails, keep the manifest entry and continue the batch unless the user asks for fail-fast behavior.
