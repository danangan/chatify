const { ApolloServer, gql } = require("apollo-server");
const { resolvers } = require("../graphql/resolvers");
const { typeDefs } = require("../graphql/typeDefs");
const { auth } = require("../services/auth");
const {
  MessageDataSources,
} = require("../graphql/dataSources/MessageDataSource");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    message: new MessageDataSources(),
  }),
  context: async ({ req }) => {
    const token = req.headers.authorization || "";
    const user = await auth(token);
    if (!user) throw new Error("you must be logged in");
    return { user };
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
