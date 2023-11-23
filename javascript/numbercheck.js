function telephoneCheck(str) {

    let splitNumber = []
    let checkNumber = []
   
     
     splitNumber = str.split('')
     for(let i = 0; i <splitNumber.length; i++){
       if(Number(splitNumber[i])){
        checkNumber.push(splitNumber[i])
       }
     }
     if (checkNumber[0] == 1){
       if(checkNumber.length ==11){return true}
       }
     else if (checkNumber[0] !== 1){
       if (checkNumber.length == 10){return true}
       else{return false}
     }
     
         return false
   }
   
   console.log(telephoneCheck("1 555)555-5555"));