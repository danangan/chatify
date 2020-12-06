const { query } = require("./query");
const { bookType } = require("./types/bookType");

const typeDefs = [query, bookType];

module.exports = {
  typeDefs,
};
