function uniteUnique(arr) {
    let check = []
    let search= []
  for (let i = 0; i < arguments.length; i++){
    check.push(arguments[i])
  }
  for (let i = 0; i < check.length; i++){
    for (let j = 0; j <  check[i].length; j++){
      if (search.includes(check[i][j]) == false){
        search.push(check[i][j])
      }
    }
  }

  return search
  }
  
  console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));