//Find the larger number from the two given positive integers
//The two numbers are in range 40..60 inclusive

const twoNums = (x, y) => {
    if (x>=40 && x<=60 && y>=40 && y<=60) {
        if (x === y) {
            return "Numbers are the same";
        } else if (x > y) {
            return x;
        } else {
            return y;
        }
    } else {
        return "Numbers don't fit in range";
    }
};

console.log(twoNums(45, 60));
console.log(twoNums(25, 60));
console.log(twoNums(45, 80));
