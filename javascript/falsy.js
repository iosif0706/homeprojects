function bouncer(arr) {
  let checkeach = []
  for (let i = 0; i < arr.length; i++){
    if (!!arr[i]){
        checkeach.push(arr[i])
    }
    }
  
  return checkeach;
}

console.log(bouncer([7, "ate", "", false, 9, NaN]));