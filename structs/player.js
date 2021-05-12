const { beg_elements } = require('./elements.js');
module.exports = class Player {
  
  constructor(user_id) {
    this.user = user_id;
    this.durability = 1;
    this.health = 1;
    this.speed = 1;
    this.essence = 1;
    this.cultivation = class {
      constructor() {
        this.realm = 0;
        this.exp = 0;
      }
    }
    this.currency = 500;
    this.luck = Math.ceil(Math.random() * 5);
    this.stat_points = 5;
    this.elements = [];
    this.el_storage = [];
    this.inventory = [];
  }
  chooseElement(message) {
    function randElement() {
      return beg_elements[Math.floor(Math.random() * beg_elements.length)];
    }
    message.channel.send("You will eventually learn hundreds of elements, but to begin your journey, you must choose one: ");
    let str_msg = "";
    beg_elements.forEach(element => {
      str_msg += element + ",\n"
    });
    message.channel.send(str_msg);
    const filter = m => m.author.id === message.author.id && m.channel.id === message.channel.id;
    const collector = message.channel.createMessageCollector(filter, { time: 30000, max: 1 });
    collector.on('collect', m => {
      console.log(`Collected ${m.content}`);
      if(beg_elements.includes(m.content.toLowerCase())){
        this.elements.push(m.content.toLowerCase());
        message.channel.send("You have chosen: " + this.elements[0]);
        return;
      } else {
        message.channel.send("Bruh that's not an element... ");
        return this.chooseElement(message);

      }
    });
    
    collector.on('end', collected => {
      console.log(collected.size);
      if(collected.size) return;
      message.channel.send("Bruh you didn't choose in time... so we'll choose for you.");
      this.elements.push(randElement());
      message.channel.send("Your element is... " + this.elements[0]);
    });
  }
}
