var Being = require('../src/being');
var Part = require('../src/part');
var invalidTypes = ['wooden', 'tin', 'plastic'];
var randomJunk = ['egg', 3432, false, [], {}];
// var crewMembers = ['crewmember', 'droid'];

class Ship{
  constructor({name, type, maxCrew, odometer, fuelCapacity, fuel = 0, captain, parts}){
    this.name = name;
    this.type = invalidTypes.includes(type) ? undefined : type;
    this.maxCrew = maxCrew || 2;
    this.odometer = odometer || 0;
    this.fuelCapacity = fuelCapacity || 10;
    this.fuel = fuel;
    this.captain = captain || undefined;
    this.crew = [];
    this.cargo = [];
    this.parts = parts || {};
  }

  addCrew(crew){
    for(var i = 0; i < crew.length; i++){
      if(crew[i] instanceof Being){
      this.crew.push(crew[i]);
    } if(this.crew.length > this.maxCrew){
      this.crew.splice(this.maxCrew)
      }
    }
  }

  loadCargo(partCargo){
    this.cargo.push(partCargo);
    for(var i = 0; i < this.cargo.length; i++){
      if(this.cargo[i] != partCargo){
        this.cargo.pop(this.cargo[i])
      }
    }
  }


  updatePart(part){
    // var originalValue = this.parts[part.type].value;
    var isValid = part.isValid();
    if(isValid){
    var partExists = this.parts[part.type]
    var partValue = partExists ? partExists.value : 0;
    var diff = partValue - part.value
    this.parts[part.type] = part;
      return diff
      }
    }

    checkReadiness(){
      var status = {
        readyToFly: false,
      };
      if(!this.captain){
        // status.readyToFly = false;
        status.notes = 'Cannot fly without a captain';
      } else if(this.fuel === 0){
        // status.readyToFly = false;
        status.notes = 'Cannot fly without fuel';
      } else if(Object.keys(this.parts).length === 0){
        // status.readyToFly = false;
        status.notes = 'Cannot fly without all parts';
      } else {
        status.readyToFly = true;
        status.notes = 'Good to go!';
      }
      return status;
    }
  }


module.exports = Ship;
