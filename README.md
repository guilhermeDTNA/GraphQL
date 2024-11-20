# GraphQL
Projeto para estudo do GraphQL


Para executar:

```console
$ npm start
```

Acessar localhost:4000 e realizar as consultas. Ex.:

```graphql
query {
  usuarios {
    ativo
    idade
    nome
    salario
    tecnologias
  }

  produtos{
    nome
    preco
  }
}
```