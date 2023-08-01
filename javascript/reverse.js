function reverseString(str) {
  let reverse = '';
  let count = str.length -1;
  for (let i = count; i >= 0; i--){
    reverse+= str[i]
  }
  return reverse;
}

console.log(reverseString("hello"));