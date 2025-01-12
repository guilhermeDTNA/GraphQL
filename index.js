const {gql, ApolloServer} = require("apollo-server");

const listaUsuarios = [
    {
        idade: 26,
        salario: 5550.30,
        nome: "Guilherme",
        ativo: true,
        id: 1,
        tecnologias: ["React JS", "NextJS", "GraphQL"],
        telefone_fixo: '(38) 3531-6704'
    },

    {
        idade: 30,
        salario: 2600,
        nome: "Teste",
        ativo: false,
        id: 2,
        tecnologias: ["VTEX", "Shopify"],
        telefone_fixo: '(38) 3531-2716'
    },

    {
        idade: 34,
        salario: 10000,
        nome: "Ayrton",
        ativo: true,
        id: 3,
        tecnologias: ["VTEX", "React JS"]
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
        telefone: String
    }

    type Produto{
        nome: String!
        preco: Float!
    }
    
    type Query{
        usuarios: [Usuario]
        produtos: [Produto]
        usuario(id: Int, nome: String): Usuario
    }
`;

const resolvers = {
    Usuario: {
        telefone(obj){
            return obj.telefone_fixo;
        }
    },

    Query: {
        usuarios(){
            return listaUsuarios;
        },
        produtos(){
            return listaProdutos;
        },
        usuario(_, args){
            const foundById = listaUsuarios.find(usuario => usuario.id === args.id);
            return foundById || listaUsuarios.find(usuario => usuario.nome === args.nome);
        }
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen();