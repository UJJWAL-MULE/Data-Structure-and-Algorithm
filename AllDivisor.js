//problem : Given an integer n, return a list of all the divisors of n. The order of the divisors does not matter.

const divisiors =(n)=>{
    let result = [];
    for (let i= 0 ; i< Math.sqrt(n) ; i++){
    if(n % i ===0){
        result.push(i);
        if(i !== n/i){
            result.push(n/i);
        }
    }
    }
    return result;  
}

console.log(divisiors(12)); // [1, 2, 3, 4, 6, 12]
console.log(divisiors(15));