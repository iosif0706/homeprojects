function largestOfFour(arr) {
    let biggestArr = []
    let biggestNr = []
    for (const check in arr){

      for (let i = 0; i < arr[check].length; i++){
        if (biggestNr.length == 0){
            biggestNr = arr[check][i]
        }

      else if (arr[check][i] > biggestNr){
            biggestNr = arr[check][i]

            }
        }
      
    biggestArr.push(biggestNr)
        biggestNr = []
    }
  
    return console.log(biggestArr);
  }
  
  largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);