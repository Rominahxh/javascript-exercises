//Check if a number is a prime:
//Write a function that takes a number as a parameter and returns true if it's a prime number,
//otherwise returns false.

function isPrime(n) {
    if (n < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(7));
console.log(isPrime(12));

