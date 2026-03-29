// Remove dulicates from an soretd array without using new Space and provide length of new array after removing duplicates

function removeDuplicates(arr){
 if(arr.length < 2){
  return arr
 }
  let i =0
  for(let j =1 ; j <arr.length ; j++){
    if(arr[j] > arr[i]){
      arr[i+1] = arr[j]
      i++      
    }
  }
return i+1
 }
  

const arr = [1,1,2,2,3,4,5,5]

const newLength = removeDuplicates(arr)
console.log(arr.splice( 0,newLength))