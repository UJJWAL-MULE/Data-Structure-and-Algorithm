// problem is to count the number of digits in a given number
function countDigits(number){
  let count =0

  if(number === 0){
    return 1
  }

  while(number>0){
    number = Math.floor(number/10)
    count++
  }
  return count
}

// test the function
console.log(countDigits(12345)) // should return 5
console.log(countDigits(0)) // should return 1
console.log(countDigits(9876543210)) // should return 10