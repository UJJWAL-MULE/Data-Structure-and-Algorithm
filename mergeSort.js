const merege = (arr  , low , high )=>{
    if(low >= high){
        return
    }
    let mid = Math.floor((low+high)/2)
    
    merege(arr , low , mid )
    merege(arr , mid+1 ,high)
    combine(arr , low , mid , high)
    return arr
    
}

const combine=(arr , low , mid  , high) =>{
    let left = low 
    let right = mid+1
    const newArr =[]
    while (left <= mid && right <= high){
        
        if(arr[left] < arr[right]){
            newArr.push(arr[left])
            left++
        }
        else{
            newArr.push(arr[right])
            right++
        }
    }
    
    while(left <= mid){
        newArr.push(arr[left])
        left++
    }
    
    while(right <= high){
        newArr.push(arr[right])
        right++
    }
    
    for (let i=low ; i<= high ;i++){
        arr[i]= newArr[i-low]
    }
    
}

console.log(merege([ 42, 7, 19, 88, 31 ] , 0, 4))

