
const {Realms} =  require('./Realms.js');

module.exports = class Cultivation {

  constructor() {
    this.realm = 0;
    this.exp = 0;
  }
  getRealm() {
    return Realms.realms[this.realm];
  }
  cultivate(message) {
    this.exp += Realms.exp_inc[this.realm];
    if(this.exp >= Realms.max_exp[this.realm]) {
      this.exp = this.exp - Realms.max_exp[this.realm];
      this.realm += 1;
      message.channel.send(`You have broken through to the ${this.getRealm()} Realm!!! Congratulations!`);
    }
  }
}