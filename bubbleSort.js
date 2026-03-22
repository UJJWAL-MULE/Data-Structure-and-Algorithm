// PRoblem Statement: Given an array of integers, sort the array in ascending order using the bubble sort algorithm.

const BBSort =(arr)=>{
    for (let i = 0; i < arr.length-1 ; i++){
      
        for(let j=0 ; j< arr.length-1- i ; j++){

            if(arr[j] > arr[j+1]){

              let temp = arr[j+1]
              arr[j+1] = arr[j]
              arr[j] = temp
            }
        }
         console.log(arr)
    }
    return arr
}

console.log(BBSort([42, 7, 19, 88, 31]))