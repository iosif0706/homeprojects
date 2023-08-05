function getIndexToIns(arr, num) {
    let swap = ''
    const zero = 0
    
    for (let i = 0; i < arr.length; i++){
        for (let j = i+1; j < arr.length; j++)
        if (arr[i] > arr[j]){
          swap = arr[i]
          arr[i] = arr[j]
          arr[j] = swap
        }
    }
    for (let j = 0; j < arr.length; j++){
        if (arr[j] > num){
            return j
        }
        else if (num > arr[arr.length -1]){
            return arr.length
        }
    }
    if (arr == ''){
        return zero
    }
    
}
    
    console.log(getIndexToIns([2, 4, 1, 9, 20, 22, 11, 7], 15));