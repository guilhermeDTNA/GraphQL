const {gql, ApolloServer} = require("apollo-server");

const listaUsuarios = [
    {
        idade: 26,
        salario: 5550.30,
        nome: "Guilherme",
        ativo: true,
        id: 1,
        tecnologias: ["React JS", "NextJS", "GraphQL"]
    },

    {
        idade: 30,
        salario: 2600,
        nome: "Teste",
        ativo: false,
        id: 2,
        tecnologias: ["VTEX", "Shopify"]
    }
]

const listaProdutos = [
    {
        nome: "Smartphone",
        preco: 1000
    },
    {
        nome: "Notebook",
        preco: 1599.99
    }
]

const typeDefs = gql`
    type Usuario{
        idade: Int!
        salario: Float
        nome: String
        ativo: Boolean
        id: ID
        tecnologias: [String!]!
    }

    type Produto{
        nome: String!
        preco: Float!
    }
    
    type Query{
        usuarios: [Usuario]
        produtos: [Produto]
    }
`;

const resolvers = {
    Query: {
        usuarios(){
            return listaUsuarios;
        },
        produtos(){
            return listaProdutos;
        }
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen();