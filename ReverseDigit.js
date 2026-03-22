// problem to reverse the digits of a given number

function reverseDigits(number){
let reversed = 0

while(number>0)
{
 let digit = number % 10
  number= Math.floor(number / 10)
  
  reversed= reversed * 10 + digit
}
return reversed
}

// test the function
console.log(reverseDigits(12345)) // should return 54321
console.log(reverseDigits(0)) // should return 0
console.log(reverseDigits(98765403210)) // should return 123456789