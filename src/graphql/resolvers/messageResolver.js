const messageResolver = {
  Query: {
    messages: (parent, args, context) => {
      return context.dataSources.message.getMessagesByAuthorId(args.authorId);
    },
  },
  Mutation: {
    addMessage: (parent, args, context) => {
      return context.dataSources.message.addMessage(
        args.authorId,
        args.recipientId,
        args.content
      );
    },
  },
};

module.exports = {
  messageResolver,
};
