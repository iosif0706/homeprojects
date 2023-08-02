function confirmEnding(str, target) {
  let check = false;
  let lengthTarget = target.length - 1;
  let lengthStr = str.length - 1
  for (let i = lengthTarget; i >= 0; i--){
    for (let j = lengthStr; i >= 0; i--){
        if (target[i] == str[j]){
            check = true;
            lengthStr-= 1;
            break
        }
        else{
            return false
        }
        
    }
  }
  
  return check;
}


console.log(confirmEnding("Open sesame", "same"))