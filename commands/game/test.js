const { Command } = require("discord.js-commando");

module.exports = class testCommand extends Command {
  constructor(client) {
    super(client, {
      name: "test",
      aliases: ["t"],
      group: "game",
      memberName: "test",
      description: "tests the command, checking out commando",
    })
  }
  run(message) {
    return message.channel.send("Testing is a success... somehow?")
  }
}