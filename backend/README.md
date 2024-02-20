### Pré-requisitos

- Docker
- Docker Compose
- NodeJS

### Instalação

1. Clone este repositório:

```
git clone https://github.com/kennedyaquino/tbc.git
```

2. Na pasta ```/backend``` do projeto execute o docker compose na linha de comando para subir o container do banco de dados mysql:
```
docker compose up -d
```

3. Crie um arquivo ```.env``` com os seguites dados:
```
DATABASE_URL="mysql://root:12345@localhost:3306/TBC"
```

4. Instale as dependências da api:
```
npm install
```

5. Execute as migrate do prisma no banco de dados:
```
npx prisma migrate dev
```

6. Inicie a api com ```npm run dev``` e acesse os endpoints pela rota: ```http://localhost:3333/```

### Endpoints

```GET http://localhost:3333/members``` Mostra uma lista com todos membros cadastrados.

```GET http://localhost:3333/members/name/{nome}``` Mostra uma lista de todos os membros que contém o nome fornecido no endpoint.

```GET http://localhost:3333/members/{id}``` Mostra um membro com id fornecido.

```DELETE http://localhost:3333/members/{id}``` Deleta um membro com id fornecido.

```POST http://localhost:3333/members``` Cria um membro. Os atributos a serem passados no body da requisição estão no Json abaixo.

```json
{
	"name": "fulano de tal",
	"birthday": "2000-02-15",
	"numberphone": "1199999999",
	"street": "nome da rua",
	"district": "nome do bairro",
	"city": "Sao Paulo",
	"state": "SP"
}
```

