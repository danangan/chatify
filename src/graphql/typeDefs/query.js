const { gql } = require("apollo-server");

const query = gql`
  type Query {
    messages(authorId: ID!): [Message]
  }
`;

module.exports = {
  query,
};
