function convertToRoman(num) {
    let romanNumber = ''
  
  for (let i = 0; i < 12; i++){
    if (num / 1000 && num >= 1000 ){
      num = num - 1000
      romanNumber += 'M'
    }
    else if (num / 900 && num >= 900) {
      num = num - 900
      romanNumber += 'CM'
    }
    else if (num / 500 && num >= 500){
      num = num - 500
      romanNumber += 'D'
    }
    else if (num / 400 && num >= 400) {
      num = num - 400
      romanNumber += 'CD'
    }
    else if (num / 100 && num >= 100) {
      num = num - 100
      romanNumber += 'C'
    }
    else if (num / 90 && num >= 90){
      num = num - 90
      romanNumber += 'XC'
    }
    else if (num / 50  && num >= 50){
      num = num - 50
      romanNumber += 'L'
    }
      else if (num / 40  && num >= 40){
      num = num - 40
      romanNumber += 'XL'
    }
      else if (num / 10  && num >= 10){
      num = num - 10
      romanNumber += 'X'
    }
      else if (num / 9  && num >= 9){
      num = num - 9
      romanNumber += 'IX'
    }
      else if (num / 5  && num >= 5){
      num = num - 5
      romanNumber += 'V'
    }
      else if (num / 4  && num >= 4){
      num = num - 4
      romanNumber += 'IV'
    }
      else if (num / 1  && num >= 1){
      num = num - 1
      romanNumber += 'I'
    }
  }
    return romanNumber;
  }
  
  console.log(convertToRoman(1000));