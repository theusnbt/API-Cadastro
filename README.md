# API Cadastro

API REST para cadastro de usuários, feita com Node.js, Express e MongoDB.

## Tecnologias

- [Node.js](https://nodejs.org/) (ES Modules)
- [Express 5](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/) + MongoDB
- [bcrypt](https://www.npmjs.com/package/bcrypt) para o hash das senhas
- [Zod](https://zod.dev/) para validação (em andamento)
- [dotenv](https://www.npmjs.com/package/dotenv) e [nodemon](https://nodemon.io/)

## Estrutura

```
src/
├── index.js          # Ponto de entrada: conecta ao banco e sobe o servidor
├── app.js            # Configuração do Express (middlewares e rotas)
├── db/               # Conexão com o MongoDB
├── routes/           # Definição das rotas
├── controllers/      # Recebe a requisição e envia a resposta
├── service/          # Regras de negócio
├── repository/       # Acesso ao banco de dados
├── models/           # Schemas do Mongoose
└── validation/       # Schemas de validação com Zod
```

## Como rodar

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Crie o arquivo `.env` a partir do exemplo e preencha com os dados do seu MongoDB:

   ```bash
   cp .env.example .env
   ```

3. Inicie o servidor em modo de desenvolvimento:

   ```bash
   npm run start:dev
   ```

O servidor sobe em `http://localhost:5675`.

## Rotas

### Cadastrar usuário

`POST /api/user`

Corpo da requisição:

```json
{
  "firstName": "Ana",
  "lastName": "Silva",
  "email": "ana@email.com",
  "password": "123456",
  "age": 25
}
```

O campo `age` é opcional.

Respostas:

| Status | Quando |
|---|---|
| `201` | Usuário criado com sucesso |
| `400` | E-mail já cadastrado ou dados inválidos |
