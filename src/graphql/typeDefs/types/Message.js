const { gql } = require("apollo-server");

const Message = gql`
  type Message {
    id: ID!
    content: String
    authorId: ID!
    recipientId: ID!
  }
`;

module.exports = {
  Message,
};
