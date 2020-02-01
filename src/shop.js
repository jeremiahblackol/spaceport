var Ship = require('../src/ship');
var Being = require('../src/being');
var Part = require('../src/part');


class Shop{
  constructor({name}){
    this.name = name;
    this.inventory = {};
  }

  addInventory(part){
    var badNameArray = ['something', 'else'];
    this.inventory[part.type] = part;
      for(var i = 0; i < badNameArray.length; i++){
        if(this.inventory[part.type].name === badNameArray[i]){
          delete this.inventory[part.type]
          return
      }
    }
  }

  outfitShip(ship, part){
    var hasCaptain = ship.captain;
    var hasCredits = hasCaptain ? ship.captain.credits : 0;
    var difference = hasCredits - this.inventory[part].value;
    var hasEnoughCredits = difference > 0;
    if(!hasCaptain){
      return `cannot outfit a ship without a captian`
    }
    if(!hasCredits || !hasEnoughCredits){
      return `you require ${Math.abs(difference)} more credits to make this purchase`
    }
    if(hasEnoughCredits){
      ship.captain.credits -= this.inventory[part].value;
      ship.parts[part] = this.inventory[part];
      delete this.inventory[part]
      return `${part} added to ship`
    }
//   //   }
//   //   // var partArray = [];
//   //   // partArray.push(part);
//   //   // console.log(partArray);
//   //   // if(ship.captain.credits > ship.parts[part.type].value){
//   //     // ship.parts[part.type] = part;
//   //     console.log(this.inventory);
//   //   // }
//   //
//   //   // if(ship.captain.credits > )
  }
}


module.exports = Shop;
