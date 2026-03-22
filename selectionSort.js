const SelectionSort =(arr)=>{
    for (let i = 0; i < arr.length-1 ; i++){
        let sortedIndex = i
        for(let j=i+1 ; j< arr.length ; j++){
                  if(arr[j] < arr[sortedIndex]){
                      sortedIndex = j
                  }
        }
        console.log(arr[sortedIndex] , arr[i])
              let temp = arr[sortedIndex]
               arr[sortedIndex]= arr[i]
              arr[i] = temp
    }
    return arr
}

console.log(BBSort([42, 7, 19, 88, 31]))


sortedINdex = 1