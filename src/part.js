
class Part{
  constructor({name, type, value, validity}){
    this.validTypes = [
      'shell',
      'hyperdrive',
      'computer',
      'life support',
      'landing gear',
      undefined];
    this.name = name;
    this.type = this.validTypes.includes(type) ? type : undefined;
    this.value = value;
    this.broken = false;

  }
  isValid(){
    if(this.name === undefined) {
      return false
    } else if(this.type === undefined) {
      return false
    } else if(this.value === undefined) {
      return false
    } else {
      return true
    }
  }
}

module.exports = Part;
