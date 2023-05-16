# Documentação da API

Esta é a documentação da API desenvolvida para resolver o caso da Shopper.

## Visão geral

A API foi projetada para permitir a atualização de preços de produtos e pacotes de produtos, seguindo as regras definidas pelo time Compras, Financeiro e Marketing. Ela fornece endpoints para carregar arquivos CSV contendo os dados de atualização e executar validações antes de atualizar os preços no banco de dados.

## Endpoints

### Atualizar preço de produtos

**URL:** `PUT /product/update`

Este endpoint é usado para atualizar o preço de produtos.

**Requisição:**
- Método HTTP: PUT
- Corpo da requisição: Arquivo CSV contendo os campos `product_code` e `new_price` seguidos dos valores.

**Resposta:**
- Código de status: 200 OK
- Corpo da resposta: Array de objetos contendo as informações atualizadas dos produtos.

### Atualizar preço de pacotes

**URL:** `PUT /pack/update`

Este endpoint é usado para atualizar o preço de pacotes de produtos.

**Requisição:**
- Método HTTP: PUT
- Corpo da requisição: Arquivo CSV contendo os campos `pack_code`, `product_code` e `new_price` seguidos dos valores.

**Resposta:**
- Código de status: 200 OK
- Corpo da resposta: Array de objetos contendo as informações atualizadas dos produtos do pacote.

## Exemplos de requisição e resposta

### Atualizar preço de produtos

**Exemplo de requisição:**

```
PUT /product/update
Content-Type: multipart/form-data

product_code,new_price
16,22.53
18,9.8
```

**Exemplo de resposta:**

```
200 OK
Content-Type: application/json

[
  {
    "code": 16
    "name": "AZEITE  PORTUGUÊS  EXTRA VIRGEM GALLO 500ML"
    "cost_price": 18.44
    "sales_price": 22.53
  },
  {
    "code": 18
    "name": "BEBIDA ENERGÉTICA VIBE 2L"
    "cost_price": 8.09
    "sales_price": 9.8
  }
]
```

### Atualizar preço de pacotes

**Exemplo de requisição:**

```
PUT /pack/update
Content-Type: multipart/form-data

pack_code,product_code,new_price
1010,26,6.3
1010,24,4.38
```

**Exemplo de resposta:**

```
200 OK
Content-Type: application/json

[
  {
    "pack_code": 1010
    "product_code": 26
    "name": "ROLO DE PAPEL ALUMÍNIO WYDA 30CMX7,5M"
    "cost_price": 5.21
    "sales_price": 6.3
  },
  {
    "pack_code": 1010
    "product_code": 24
    "name": "FILME DE PVC WYDA 28CMX15M"
    "cost_price": 3.59
    "sales_price": 4.38
  }
]
```

## Tecnologias utilizadas

- Node.js
- TypeScript
- MySQL
- Multer
- dotenv
- Express
- Cors
- Knex

## Configuração e execução local

1. Clone o repositório para o seu ambiente local:

   ```
   git clone [<URL do repositório>](https://github.com/rodrigosnascimento/teste-shopper)
   ```

2. Acesse o diretório do projeto:

   ```
   cd back-end
   ```

3. Instale as dependências do projeto:

   ```
   npm install
   ```

4. Configure as variáveis de ambiente:

   - Crie um arquivo `.env` na raiz do projeto.
   - Adicione as variáveis de ambiente necessárias, como informações de conexão com o banco de dados e outras configurações específicas.
   - Exemplo de conteúdo do arquivo `.env`:

     ```
     DB_HOST=localhost
     DB_USER=username
     DB_PASSWORD=password
     DB_DATABASE=database_name
     ```

5. Execute o projeto:

   ```
   npm run dev
   ```

6. A API estará acessível localmente no endereço:

   ```
   http://localhost:3003
   ```

Certifique-se de que o MySQL esteja instalado e configurado corretamente no seu ambiente.

Você pode usar ferramentas como o Postman ou o cURL para enviar requisições aos endpoints da API.
