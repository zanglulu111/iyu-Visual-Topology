create table if not exists public.api_runtime_configs (
  user_id uuid primary key references auth.users(id) on delete cascade,
  config_data jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.api_runtime_configs enable row level security;

create policy "Users can read their own api runtime config"
on public.api_runtime_configs
for select
using (auth.uid() = user_id);

create policy "Users can insert their own api runtime config"
on public.api_runtime_configs
for insert
with check (auth.uid() = user_id);

create policy "Users can update their own api runtime config"
on public.api_runtime_configs
for update
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

create policy "Users can delete their own api runtime config"
on public.api_runtime_configs
for delete
using (auth.uid() = user_id);
