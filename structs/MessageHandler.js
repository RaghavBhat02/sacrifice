const Discord = require("discord.js");
const Canvas = require("canvas");
const Cultivation = require("./Cultivation.js")
module.exports = class MessageHandler {

  constructor(client) {

    client.on("message",  message => {
      let cultivation = new Cultivation();
      cultivation.cultivate(message);
    })

  }

}