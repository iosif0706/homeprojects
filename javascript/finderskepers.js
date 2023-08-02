function findElement(arr, func) {
    let num = '';
    for (let i = 0; i < arr.length;i++){
        if (arr[i] % 2 === 0){
            
            num = arr[i]
            return num
        }
        
    }
      
    return num[0];
  }
  
  findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0);
  console.log(findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0))