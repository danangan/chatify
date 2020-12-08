const { gql } = require("apollo-server");

const mutation = gql`
  type Mutation {
    addMessage(authorId: ID!, recipientId: ID!, content: String!): Message
  }
`;

module.exports = {
  mutation,
};
