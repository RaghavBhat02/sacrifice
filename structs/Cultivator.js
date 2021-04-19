const elements = ["fire", "water", "air", "earth"];
const Cultivation = require('./Cultivation.js')
module.exports = class Cultivator {

  constructor(user, message) {
    this.username = user.username;
    this.id = user.id;
    this.cultivation = new Cultivation();
    this.cultivation.cultivate(message);
    //element pick.
    message.channel.send('Young cultivator, there are hundreds of elements in existence.');
    message.channel.send('It takes ages of hard work to master the greatest of them. One day you shall reach there.');
    message.channel.send('But for now, you must pick, one of four elements...');
    message.channel.send('Fire🔥!\nWater🌊!\nAir💨!\nEarth🏔!');
    message.channel.send('You have 30 seconds to choose young one, choose well.');
    const filter = m => m.author === message.author;
    const collector = message.channel.createMessageCollector(filter, { time: 30000, max: 1 });
    collector.on('end', collected => {
      console.log(`Collected ${collected.size} items`);
      function randomPick(cultivator) {
        const pick = Math.floor(Math.random() * 4);
        cultivator.element = elements[pick];
        console.log(`element: ${cultivator.element}`);
        message.channel.send(`After much deliberation, the world has decided that you should have **${cultivator.element}**.`);
      }
      if (!collected.size) {
        message.channel.send("You ran out of time, the world will now pick for you...");
        randomPick(this);
      } else if(!elements.includes(collected.first().content.toLowerCase())) {
        message.channel.send("That is not a choice, the world will now pick for you...");
        randomPick(this);
      } else {
        this.element =  collected.first().content.toLowerCase();
        console.log("element: " + this.element);
        message.channel.send(`Congrats on picking **${this.element}**!!`);
      }
      console.log("testing element:" + this.element);
    });
  }

  getElement() {
    console.log(`true element: ${this.elements}`);
  }
  
};