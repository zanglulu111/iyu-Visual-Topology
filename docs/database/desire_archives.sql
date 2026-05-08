-- 欲望档案与主体档案云端表
-- 请在 Supabase Dashboard -> SQL Editor 中执行此脚本。

create table if not exists public.desire_projects (
  id text primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  archive_kind text,
  source_type text,
  project_data jsonb not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists desire_projects_user_updated_idx
  on public.desire_projects (user_id, updated_at desc);

alter table public.desire_projects enable row level security;

drop policy if exists "Users can read own desire projects" on public.desire_projects;
create policy "Users can read own desire projects"
  on public.desire_projects for select
  using (auth.uid() = user_id);

drop policy if exists "Users can insert own desire projects" on public.desire_projects;
create policy "Users can insert own desire projects"
  on public.desire_projects for insert
  with check (auth.uid() = user_id);

drop policy if exists "Users can update own desire projects" on public.desire_projects;
create policy "Users can update own desire projects"
  on public.desire_projects for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

drop policy if exists "Users can delete own desire projects" on public.desire_projects;
create policy "Users can delete own desire projects"
  on public.desire_projects for delete
  using (auth.uid() = user_id);

create table if not exists public.subject_dossiers (
  id text primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  status text,
  category text,
  title text,
  dossier_data jsonb not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists subject_dossiers_user_updated_idx
  on public.subject_dossiers (user_id, updated_at desc);

alter table public.subject_dossiers enable row level security;

drop policy if exists "Users can read own subject dossiers" on public.subject_dossiers;
create policy "Users can read own subject dossiers"
  on public.subject_dossiers for select
  using (auth.uid() = user_id);

drop policy if exists "Users can insert own subject dossiers" on public.subject_dossiers;
create policy "Users can insert own subject dossiers"
  on public.subject_dossiers for insert
  with check (auth.uid() = user_id);

drop policy if exists "Users can update own subject dossiers" on public.subject_dossiers;
create policy "Users can update own subject dossiers"
  on public.subject_dossiers for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

drop policy if exists "Users can delete own subject dossiers" on public.subject_dossiers;
create policy "Users can delete own subject dossiers"
  on public.subject_dossiers for delete
  using (auth.uid() = user_id);
