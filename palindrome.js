//Check for Palindrome
//Write a function that takes a string as a parameter and returns true if the string is a palindrome
//(reads the same forwards and backwards), otherwise returns false.

function palindrome(string) {
    string = string.toLowerCase();

    for(let i = 0; i < string.length / 2 ; i++) {
        if (string[i] !== string[string.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

console.log(palindrome("romina"));

