//Find the longest word in a sentence
//Write a function that takes a sentence as a parameter and returns the longest word
//in the sentence.

function findLongestWord(sentence) {
    const words = sentence.split(" ");

    let longestWord = " ";
    let maxLength = 0;

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > maxLength) {
            longestWord = words[i];
            maxLength = words[i].length;
        }
    }

    return longestWord;
}

const sentence = "Hi my name is Romina, and I am 24 years old.";
console.log(findLongestWord(sentence));

