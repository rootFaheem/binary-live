const { buildSchema } = require("graphql");

module.exports = buildSchema(`

type User {
    _id: ID!
    name: String!
    email: String!
    password: String
}

input UserInputData {
    email: String!
    name: String!
    password: String!
}

input AuthCheckData {
    type: String
}

type AuthCheckRes {
    _id: ID!
    name: String!
    email: String!
    isLoggedIn: String!
}

type AuthData {
    userId: ID!
    isLoggedIn: Boolean!
    name: String!
    email: String!
    token: String!
}

type RootQuery {
    userLogin(email: String!, password: String!): AuthData
    authCheckUser(userInput: AuthCheckData): AuthCheckRes!
}

type RootMutation {
    createUser(userInput: UserInputData): User!
}

schema {
    query: RootQuery
    mutation: RootMutation
}
`);
