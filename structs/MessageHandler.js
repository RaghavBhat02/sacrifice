require("dotenv").config()

const Cultivation = require("./Cultivation.js")
module.exports = class MessageHandler {

  constructor(client) {

    client.on("message",  message => {
      /*
      let cultivation = new Cultivation();
      cultivation.cultivate(message);*/
      if(message.author.bot) return;
      if(message.content.toLowerCase().startsWith('jia ru')) {
        message.channel.send("JIA RU!! ALL HAIL TRIBAL LEADER SRONG864!");
        if(message.guild.id != "815617032917745754") return;
        message.channel.send(process.env.JIARU); //link to jiaru
      }
    })

  }

}