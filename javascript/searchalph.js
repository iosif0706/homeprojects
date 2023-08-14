function fearNotLetter(str) {
    let alphabet = []
    let check = []
    let newNumber = []
    let verify = []
  
    for (let i = 0; i < str.length; i++){
      alphabet.push(str[i].charCodeAt(0))
    }
    
  for (let i = 0; i < alphabet.length; i++) {
  
  
      if (alphabet[i] + 1 !== alphabet[i+1]){
        
        newNumber = alphabet[i] +1 
        if (newNumber < 122){
          newNumber = String.fromCharCode(newNumber)
          break
        }
       
        else{
          return
        }
      }
      }
      return newNumber
  }
  
  console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));