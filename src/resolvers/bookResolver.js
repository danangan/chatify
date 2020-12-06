const { bookDataProvider } = require("../dataProviders/bookDataProvider");

const bookResolver = {
  Query: {
    books: () => {
      return bookDataProvider();
    },
  },
};

module.exports = {
  bookResolver,
};
