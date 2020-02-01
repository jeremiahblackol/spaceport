class Being {
  constructor(name, species){
    this.isAlive = true;
    this.name = name;
    this.species = species;
    this.credits = 0;
  }
  updateCredits(num){
    this.credits += num;
  }
}

module.exports = Being;
