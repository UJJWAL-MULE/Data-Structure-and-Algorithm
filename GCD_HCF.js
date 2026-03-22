// problem : Given two integers a and b, return the greatest common divisor (GCD) of a and b.

const gcd = (a, b) => {

  while( a>0 && b>0){
    if(a > b){
      a= a % b;
    }
    else{
      b = b % a;
    }
  }
  return a + b;
}

// test cases

console.log(gcd(15 , 45))
console.log(gcd(45 ,30))