function truncateString(str, num) {
    let trucate = ""
    if (str.length > num){
      for (let i = 0; i < num; i++){
        trucate += str[i]
      }
      trucate+= "..."
    }
    else {
        trucate = str
    }
    return trucate;
  }
  
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length))