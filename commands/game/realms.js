const { Command } = require("discord.js-commando");

module.exports = class startCommand extends Command {
  constructor(client) {
    super(client, {
      name: "realms",
      aliases: ["cultivation-realms", "cr", "ranks", "path"],
      group: "game",
      memberName: "realms",
      description: "Lists all cultivation realms."
    })
  }
  run(message) {
    return message.channel.send(" 1. **Half-Blood** \n2. **Einherjar** \n3. **Odyssey** \n4. **Hero** \n5. **Pharoah** \n6. **Aesir** \n7. **Titan** \n8. **Olympian**");
  }
}