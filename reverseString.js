//Reverse a String
//Write a function that takes a string as a parameter and returns the reverse of that string.

function reverseString(string) {
    let reversed = "";
    for (let i = string.length - 1; i>=0; i--) {
        reversed += string[i];
    }
    return reversed;
}

console.log(reverseString("hello"));
