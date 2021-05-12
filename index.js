const { Intents } = require("discord.js");
const Commando = require("discord.js-commando");
const path = require("path");
const MessageHandler = require("./structs/message.js")
require("dotenv").config();

const myIntents = new Intents();
myIntents.add("GUILDS", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS", "GUILD_EMOJIS", "GUILD_MEMBERS", "DIRECT_MESSAGES");

const client = new Commando.CommandoClient({
  owner: ["652482941267607602", "573189888137232424"],
  commandPrefix: process.env.PREFIX,
  disableEveryone: true,
  ws: { intents: myIntents }
})
//client on 
client.on('ready', ()=> {
  client.user.setActivity('It\'s time');
  console.log("Bot is ready");
  new MessageHandler(client);
});
client.on("error", console.error);

client.registry
  .registerDefaultTypes()
  .registerDefaultGroups()
  .registerDefaultCommands()
  
  .registerGroups([
    ["game", "Game Commands"]
  ])
  .registerCommandsIn(path.join(__dirname, "commands"));
  
client.login(process.env.TOKEN)