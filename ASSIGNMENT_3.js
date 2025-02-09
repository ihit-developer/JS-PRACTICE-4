// Get input from user
let inputString = prompt("Enter a sentence:");

// Convert string to an array of words
let wordsArray = inputString.split(" ");

// Sort words alphabetically
wordsArray.sort();

// Remove duplicates
let uniqueWords = [];
for (let word of wordsArray) {
    if (!uniqueWords.includes(word)) {
        uniqueWords.push(word);
    }
}

// Join words back into a string with commas
let resultString = uniqueWords.join(", ");

// Check if a word exists
let searchWord = prompt("Enter a word to check:");
let isPresent = uniqueWords.includes(searchWord);
alert(`Is "${searchWord}" present? ${isPresent}`);

// Replace a word
let oldWord = prompt("Enter the word to replace:");
let newWord = prompt("Enter the new word:");
let finalString = resultString.replaceAll(oldWord, newWord);

// Show result
console.log("Final String:", finalString);
alert("Final String: " + finalString);