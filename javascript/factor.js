function factorialize(num) {
    let count = 1
    for (let i = 1; i <= num; i++)
    count*= i
    
      return count;
    }
    
    console.log(factorialize(5));