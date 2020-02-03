var Ship = require('../src/ship');


class Planet {
  constructor({name, shop, coordinates}){
    this.name = name;
    this.shop = shop;
    this.currentShip = {};
    this.coordinates = coordinates;
    // this.result = "";
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
    var hasParts = Object.keys(this.currentShip.parts).length > 0;
    var hasFuel = this.currentShip.fuel;
    var fuelRequired = Math.ceil(this.calculateDistance(planet));
    var needsMoreFuel = hasFuel < fuelRequired;
    var result = "";

    if(!hasParts){
      result = "Clearance denied: Cannot fly without all parts";
      return result
    }
    if(!hasFuel) {
      result =  "Clearance denied: Cannot fly without fuel";
      return result
    }
    if(hasFuel && needsMoreFuel) {
      result = `Clearance denied: Need at least ${fuelRequired} units of fuel to reach ${planet.name}`;
      return result
    }
    if(hasFuel && hasParts){
      this.currentShip.fuel = hasFuel - fuelRequired;
      planet.currentShip = this.currentShip;
      this.currentShip = undefined;
      result = `Clearance granted: Enjoy your trip to ${planet.name}`;
      return result

    }
      return
  }
}


module.exports = Planet;
