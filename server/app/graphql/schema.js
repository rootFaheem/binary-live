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


type AuthCheckRes {
    isLoggedIn: Boolean!
    authCheck: Boolean!
    userId: ID!
    name: String!
    email: String!
}

type AuthData {
    isLoggedIn: Boolean!
    userId: ID!
    name: String!
    email: String!
    token: String!
}

type RootQuery {
    
    authCheckUser(type: String): AuthCheckRes!
}

type RootMutation {
    userLogin(email: String!, password: String!): AuthData
    createUser(userInput: UserInputData): User!
}

schema {
    query: RootQuery
    mutation: RootMutation
}
`);
