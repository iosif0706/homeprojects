function mutation(arr) {

  let first = []
  let secound = []
  let count = ''

  for (let i = 0; i < arr[0].length; i++){
    first.push(arr[0][i])
  }
  for (let j = 0; j < arr[1].length; j++){
    secound.push(arr[1][j])
  }
  const lowerFirst = first.map(word => word.toLowerCase());
  const lowerSecound = secound.map(word => word.toLowerCase());


  for(let i = 0; i < lowerSecound.length; i++)
  {
      if(lowerFirst.indexOf(lowerSecound[i]) >= 0)
      {
          count++
      }
  if (count == lowerSecound.length){
    return true
  }
    
    
  }
  return false
}
  
  console.log(mutation(["Noel", "eloz"]));