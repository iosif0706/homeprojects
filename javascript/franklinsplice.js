function frankenSplice(arr1, arr2, n) {
let check = []
if(n == 0){
  check = arr1.concat(arr2)
}

  for (let i = 0; i < arr2.length; i++){
   check.push(arr2[i])
   if( i === n-1){
    for (let j = 0; j < arr1.length; j++){
      check.push(arr1[j])
    }
   }
  }

  return check
}

console.log(frankenSplice([1, 2, 3, 4], [], 0));
