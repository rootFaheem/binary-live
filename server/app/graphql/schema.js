const {} = require("graphql");

module.exports = `

type RootQuery {
    hello: String
}

schema {
    query: RootQuery
}
`;
