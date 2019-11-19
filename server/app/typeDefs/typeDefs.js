const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    hello: String!
    getUsers: [User!]
  }

  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Mutation {
    registerUser(name: String!, email: String!, password: String): User!
  }
`;

module.exports = typeDefs;
