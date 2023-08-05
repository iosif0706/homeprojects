Array.prototype.myMap = function(callback) {
  const newArray = [];
  let result = []
  // Only change code below this line
 
for (let i = 0; i < this.length; i++){
    result = callback(this[i], i, this)
  newArray.push(result)
}
  // Only change code above this line
  return newArray;
};
const map = [23, 65, 98, 5, 13].myMap(item => item * 2)
console.log(map)