// Code for quick sort algorithm

function quickSort(arr , low , high){

  while(low < high){

    let pivot = partition(arr, low , high)
    quickSort(arr, low, pivot - 1)
    quickSort(arr, pivot + 1, high)
  }

  return arr
}

function partition(arr , low , high){

  let pivot = arr[low]
  let i = low + 1
  let j = high

  while(i <= j){

  while(arr[i] <= pivot && i <= high){
    i++
}

while(arr[j] > pivot && j >= low){
    j--
}

if(i < j){
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp

}

let temp = arr[low]
arr[low] = arr[j]
arr[j] = temp
}


return j
}


let arr = [ 42, 7, 19, 88, 31 ]
quickSort(arr, 0, arr.length - 1)
console.log(arr)