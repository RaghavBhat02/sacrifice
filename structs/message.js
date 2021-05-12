const Player = require('./player.js');

module.exports = class MessageHandler {
  constructor(client) {
    client.on('message', message => {
      if(message.content.toLowerCase() === 'start') {
        let player = new Player(message.author.id);
        player.chooseElement(message);
        let map = new Map();
        map.set(map.set(message.author.id, player));
        console.log(map.get(message.author.id));
        map.set('key','baller');
        const json_map = JSON.stringify(map);
        console.log(json_map);
      }
    })
  }
}