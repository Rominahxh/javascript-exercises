//Find the maximum number in an array
//Write a function that takes an array of numbers as a parameter and returns the maximum number in the array.

function maxNum(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

const nums = [7, 8, 99, 102, 44, 5];
console.log(maxNum(nums));

