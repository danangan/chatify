const { query } = require("./query");
const { mutation } = require("./mutation");
const { Message } = require("./types/Message");

const typeDefs = [query, mutation, Message];

module.exports = {
  typeDefs,
};
