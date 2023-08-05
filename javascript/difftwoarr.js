function diffArray(arr1, arr2) {
  const newArr = [];
  let longest = [];
  let shortest = [];
  let check = ""
  if (arr1.length >  arr2.length) {
    shortest = shortest.concat(arr2)
    longest = longest.concat(arr1)
  } 
  else {
       shortest = shortest.concat(arr1)
    longest = longest.concat(arr2)
  }
  for (let i = 0; i < longest.length; i++){
    check = shortest.includes(longest[i])
    if(check === false){
    newArr.push(longest[i])
    }
  }
    for (let j = 0; j < shortest.length; j++){
      check = longest.includes(shortest[j])
      if (check === false) {
        newArr.push(shortest[j])
      }
    }
      
  
  return newArr;
}
console.log (diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]))