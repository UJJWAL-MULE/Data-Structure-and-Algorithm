// left ROtate an array by n

function reversePart(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}
const RotateArray = (arr, n) => {
  let len = arr.length;
  const updatedN = n % len;
  reversePart(arr, 0, updatedN);      // 0,n
  reversePart(arr, updatedN + 1, len - 1);   // n+1 , len-1
 
  reversePart(arr, 0, len - 1);  // 0 , len-1
  console.log(arr);
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
RotateArray(arr, 3 - 1);



//Right Rotate an array by n



function reversePart(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}
const RightRotateArray =(arr , n)=>{
    let len = arr.length
    const updatedN = n % len
    reversePart(arr ,  updatedN+1 , len -1)   // n+1 , len-1
    console.log(arr)
    reversePart(arr , 0 ,updatedN )   // 0 , n
    console.log(arr)

    reversePart(arr , 0 , len-1) // 0 , len-1
console.log(arr)
}


const arr1 = [1,2,3,4,5 ,6,7,8 ,9]
RightRotateArray(arr1 , 5-1)
  