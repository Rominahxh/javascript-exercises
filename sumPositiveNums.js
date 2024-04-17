//Sum of positive numbers in an array
//Write a function that takes an array of numbers as a parameter and returns the sum of all
//positive numbers in the array

function positiveNums(arr) {
    sum = 0;
    for( let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
        sum += arr[i];
        } 
    }
    return sum;
}

console.log(positiveNums([1, -2, 3, -4, 5]));
console.log(positiveNums([-1, -2, -3]));
console.log(positiveNums([0, 1, 2, 3]));

