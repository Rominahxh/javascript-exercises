//Write a javascript program that checks two integer values and return true
//if either one is 15 or if their sum or difference is 15.

function fifteen(a, b) {
    
    return (a === 15 || b === 15 || a + b === 15 || Math.abs(a - b) === 15); 
}

console.log(fifteen(15, 9));
console.log(fifteen(25, 15));
console.log(fifteen(7, 8));
console.log(fifteen(25, 10));
console.log(fifteen(5, 9));
console.log(fifteen(7, 9));
console.log(fifteen(9, 25));

