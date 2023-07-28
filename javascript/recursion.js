function rangeOfNumbers(startNum, endNum) {
    if (endNum < startNum){
      return [];
    }
    else {
   
     const count = rangeOfNumbers(startNum, endNum - 1);
      count.push(endNum);
      return count
    }
    
  };
  console.log(rangeOfNumbers(2, 5));