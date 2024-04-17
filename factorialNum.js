//Calculate the factorial of a number
//Write a function that takes a number as a parameter and returns the factorial of that number.

function factorialNum (n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorialNum(n - 1);
    }
}

console.log(factorialNum(5));