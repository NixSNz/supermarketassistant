# Supermarket Assistant

Projeto full-stack para otimização de lista de compras.

## Setup

```bash
pnpm i
pnpm run dev
```

## Variáveis de ambiente

Configure `.env` na raiz com:

```
POSTGRES_USER=dev
POSTGRES_PASSWORD=devpass
POSTGRES_DB=shopping_db
DATABASE_URL=postgresql://dev:devpass@postgres:5432/shopping_db
OPENAI_API_KEY=chave
```

## Seed

```bash
pnpm exec prisma db push
pnpm exec ts-node prisma/seed.ts
```

## Exemplo de requisição

```bash
curl -X POST http://localhost:3000/api/optimize-list \
     -H "Content-Type: application/json" \
     -d '{"budget":600,"categorias":["higiene","limpeza","carnes","carboidratos"]}'
```
