const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    hello: String!
  }

  type User {
    id: ID!
    name: String!
    message: String!
  }

  type Mutation {
    registerUser(name: String!, email: String!, password: String): User!
  }
`;

module.exports = typeDefs;
