var Ship = require('../src/ship');


class Planet {
  constructor({name, shop, coordinates}){
    this.name = name;
    this.shop = shop;
    this.currentShip = {};
    this.coordinates = coordinates;
  }

  landShip(ship){
    this.currentShip = ship;
  }

  calculateDistance(planet){
    var initCoords = this.coordinates;
    var newCoords = planet.coordinates;
    var xDiff = newCoords.x - initCoords.x;
    var yDiff = newCoords.y - initCoords.y;
    var zDiff = newCoords.z - initCoords.z;
    var distance = Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2) + Math.pow(zDiff, 2))
    return distance;
  }

  refuel(ship){
    this.currentShip = ship;
    ship.fuel = ship.fuelCapacity;
  }

  giveClearance(planet){
    var hasParts = this.currentShip.parts.part;
    var doesNotHaveParts = !hasParts;
    if(doesNotHaveParts){
      return "Clearance denied: Cannot fly without all parts"
    // } else if(this.currentShip.fuel === 0){
    //   return "Clearance denied: Cannot fly without fuel"
    }
    // var hasParts = !this.currentShip.parts;
    // var clearedForParts = this.currentShip.parts ? console.log('hey') : console.log('ho');
    //
    // return clearedForParts
    // if(this.currentShip.parts = undefined){
    // }
    // console.log(this.currentShip.parts)

  }
}


module.exports = Planet;
