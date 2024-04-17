//Get the difference between a given number

const difference = (n) => {
    return n <= 13 ? 13 - n : (n - 13) * 2;
};

console.log(difference(32));
console.log(difference(11));

