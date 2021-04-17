const { Command } = require("discord.js-commando");
const  Cultivation  = require('/Users/raghavbhat/sacrifice/structs/Cultivation.js')
module.exports = class startCommand extends Command {
  constructor(client) {
    super(client, {
      name: "start",
      aliases: ["begin", "b"],
      group: "game",
      memberName: "start",
      description: "Starts game. Begins your path of cultivation.",
      args: [ 
        {
          key: "confirm",
          prompt: "Do you wish to begin your path of cultivation?",
          type: "string"
        }
      ]
    })
  }
  run(message , {confirm, name} ) {
    let sendBack = "You have ";
    if(confirm[0].toLowerCase() === 'y') {
      sendBack += "begun your journey on the path of cultivation!";
      let cultivation = new Cultivation();
      message.channel.send(sendBack);
      cultivation.cultivate(message);

      return;

    } else if (confirm[0].toLowerCase() === 'n') {
      sendBack += "decided to keep at your comfortable mortal life.";
    } else {
      sendBack = "I don't know what you want. Try again.";
    }

    let user = {
      id: message.author.id,
      name: message.author.username,
      cultivation: "mortal"
    }
    return message.channel.send(sendBack);
  }
}