function smallestCommons(arr) {
    let small = 0
    let big = 0
    let allNumber = []
    let smallest = 0
    let check = 0
    let gg = 0
  
    
      small = arr[0]
      if (small < arr[1]){
        big = arr[1]
      }
      else if(big < arr[1]) {
        big = arr[0]
        small = arr[1]
    }
  for (let i = small; i <= big; i++){
    allNumber.push(i)
  }
  for (let i = 2520; i < i+1; i++){
    gg = 0
   for (let j = 0; j < allNumber.length; j++){
     if (   Number.isInteger(i / allNumber[j])   ){
       gg += 1
     }
    if (gg == allNumber.length){
        gg = 0
       check = i
       break
     }
 
     }
     if (check != 0){
       break
     }
   }
  
  
  
    return check ;
  }
  
  console.log(smallestCommons([2,10]));