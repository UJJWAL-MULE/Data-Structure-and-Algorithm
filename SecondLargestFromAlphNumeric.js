
var secondHighest = function(s) {
    let newArr = []
  for (let i of s){
    if(Number(i) || Number(i) >= 0){
      newArr.push(Number(i))
    }
  }

  if(newArr.length < 2){
    return -1
  }
  let largest = newArr[0]
  let SecLargest = -1
  for (let i of newArr){
    if(i > largest){
       SecLargest = largest
      largest = i
    }  else if(i < largest && i > SecLargest){
      SecLargest = i
    }
  }
  return SecLargest
    
};

const s = "abc1121"
console.log(secondHighest(s))