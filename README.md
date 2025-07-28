# 🧁 Product API — Cadastro de Produtos e Feedbacks

API feita com **Node.js + Express** para cadastrar produtos (ex: empadas, salgados, doces) e receber feedbacks dos clientes.

---

## 📦 Requisitos

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) (instalado junto com o Node)

---

## 🚀 Como rodar o projeto

```bash
# 1. Acesse a pasta do projeto
cd product-api

# 2. Instale as dependências
npm install

# 3. Inicie o servidor
npm start
```

> A API ficará disponível em: [http://localhost:3000](http://localhost:3000)

---

## 📚 Endpoints da API

### 🔹 Produtos

- `POST /products` → Cadastrar novo produto  
- `GET /products` → Listar todos os produtos  
- `DELETE /products/:id` → Deletar produto por ID

📌 Exemplo de `body` para POST `/products`:
```json
{
  "name": "Empada de Frango",
  "description": "Empada recheada com frango temperado",
  "price": "7.50",
  "type": "Salgado",
  "isVegan": false,
  "isZeroLactose": true,
  "flavor": "Frango"
}
```

---

### 🔹 Feedbacks

- `POST /feedbacks` → Enviar feedback do cliente  
- `GET /feedbacks` → Listar todos os feedbacks recebidos

📌 Exemplo de `body` para POST `/feedbacks`:
```json
{
  "name": "João da Silva",
  "phone": "(85) 98765-4321",
  "message": "Muito gostoso, atendimento excelente!"
}
```

---

## 🗂 Dados salvos em arquivos

- Produtos: `data/products.json`  
- Feedbacks: `data/feedbacks.json`

---

## 🛠 Tecnologias utilizadas

- Node.js
- Express.js
- UUID
- fs-extra (para salvar os dados em arquivos)
