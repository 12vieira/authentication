# Barbearia API (Backend)

Backend em Express com Sequelize e PostgreSQL. Estrutura MVC por domain, com JWT instalado (não implementado).

## Estrutura

```
backend/
  src/
    app.js
    server.js
    config/
      database.js
    database/
      index.js
    domain/
      user/
        controller/
        routes/
        models/
```

## Requisitos

- Node.js 18+
- PostgreSQL

## Como rodar

1. Copie o `.env.example` para `.env` e ajuste as variáveis.
2. Instale as dependências e inicie o servidor.

```powershell
Set-Location "c:\Users\a92263706\Desktop\auth_jwt\backend"

npm install
npm run dev
```

## Observações

- JWT já está instalado em `package.json`, mas **não foi implementado**.
- Endpoints básicos de usuário: `GET /api/users` e `GET /api/users/:id`.
