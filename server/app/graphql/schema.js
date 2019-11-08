const { buildSchema } = require("graphql");

module.exports = buildSchema(`

type User {
    _id: ID!
    name: String!
    password: String!
    role: String!
}

input UserInputData {
    email: String!
    name: String!
    password: String!
}

type RootQuery {
    hello: String!
}

type RootMutation {
    createUser(userInput: UserInputData): User!
}

schema {
    query: RootQuery
    mutation: RootMutation
}
`);
