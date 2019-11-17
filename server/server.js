const { ApolloServer, gql } = require("apollo-server-express");
// const { typeDefs, resolvers } = require("./schema");
const express = require("express");

const app = express();

const typeDefs = gql`
  type Query {
    hello: String!
  }
`;

const resolvers = {
  Query: {
    hello: () => "hello"
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
