# Utopian Space — Web

Next.js 14 (App Router) + TypeScript + Tailwind + shadcn-style UI + Prisma/Postgres + NextAuth.

## Quickstart

```bash
pnpm install
cp .env.example .env
# set DATABASE_URL, NEXTAUTH_SECRET, NEXTAUTH_URL
pnpm db:migrate
pnpm db:seed
pnpm dev
