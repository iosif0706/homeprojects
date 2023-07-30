// Only change code below this line
class Thermostat {
  constructor (fahr){
    this.fahr = fahr;
  }
  // getter
  get writer()  {
    return this.fahr;
  }
  // setter
  set writer(temperature) {
  this.fahr = temperature * 9.0 / 5 + 32;
  this.temperature = 5/9 *(this.fahr -32);
  }

}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
thermos.writer= 23
