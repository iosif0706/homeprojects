function palindrome(str) {
  let check = ''
  let gg = ''
  const regex = /[a-zA-Z0-9]/g
  const palidor = str.match(regex)
  for (let i = 0; i <palidor.length; i++){
    gg += palidor[i]
  }

  for (let i = palidor.length - 1 ; i >= 0; i--){
    check+= palidor[i]
  }
  check = check.toLowerCase()
  gg = gg.toLowerCase()
  if (check === gg){
    return true
  }
 else{
   return false
 }

}

console.log(palindrome("0_0 (: /-\ :) 0-0"));