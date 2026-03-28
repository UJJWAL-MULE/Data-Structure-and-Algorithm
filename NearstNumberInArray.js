function findNearestNumber(arr, target) {
    if (arr.length === 0) {
        return 
        }

    let closest = arr[0];
    let minDiff = Math.abs(target - closest);

    for (let i = 1; i < arr.length; i++) {
        const currDiff = Math.abs(target - arr[i]);

        if (currDiff < minDiff) {
            minDiff = currDiff;
            closest = arr[i];
        } else if (currDiff === minDiff) {
            if (arr[i] > closest) {
                closest = arr[i];
            }
        }
    }

    return closest;
}

const arr = [34, 67, 31, 53, 89, 12, 4];
const targetNumber = 41;
const nearest = findNearestNumber(arr, targetNumber);
console.log(nearest)
