function sumAll(arr) {
 const number = arr.sort((a, b) => a -b)
 
 let list =0
 let first = number.slice(0,1)
 let secound = number.slice(1,2)
 first = first.join()
 secound = secound.join()
 for (let i = Number.first; i <= secound; i++){
   list+= i;
 }
return list
}

console.log(sumAll([1, 4]));