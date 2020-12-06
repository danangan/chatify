const { ApolloServer, gql } = require("apollo-server");
const { resolvers } = require("../resolvers");
const { typeDefs } = require("../typeDefs");

console.log(resolvers);

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
