function findLongestWordLength(str) {
    let countWord = 0;
    let checkWord = ''
    let numbers = str.length
    for (let i = 0; i < numbers; i++){
    checkWord+= str[i];
        if(str[i] == ' '){
            if(checkWord.length > countWord)
            countWord = checkWord.length - 1
            checkWord = ''
        }
        else if(i == numbers -1){
            if(checkWord.length > countWord)
            countWord = checkWord.length 
        }

    }
     
    
  
    return countWord,console.log(countWord);
  }
  
  findLongestWordLength("What if we try a super-long word such as otorhinolaryngology");
