const fs = require("fs");
const path = require("path");
const shortid = require("shortid");
const dataSourcePath = path.join(__dirname, "./messages.data.json");

class MessageDataSources {
  getMessagesByAuthorId = function (authorId) {
    const raw = fs.readFileSync(dataSourcePath);
    const messages = JSON.parse(raw);
    return messages.filter((message) => message.authorId === authorId);
  };
  addMessage = function (authorId, recipientId, content) {
    const newMessage = {
      id: shortid.generate(),
      authorId,
      recipientId,
      content,
    };

    const raw = fs.readFileSync(dataSourcePath);
    const messages = JSON.parse(raw);

    fs.writeFileSync(
      dataSourcePath,
      JSON.stringify(messages.concat([newMessage]))
    );

    return newMessage;
  };
}

module.exports = {
  MessageDataSources,
};
