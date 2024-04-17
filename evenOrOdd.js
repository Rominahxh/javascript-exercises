//Check if a Number is Even or Odd:
//Write a function that takes a number as a parameter and returns "Even" if the number is even and "Odd" if it's odd.

function evenOrOdd(a) {
    if (a % 2 == 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(evenOrOdd(3));

