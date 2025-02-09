
let userInput = prompt("Enter a sentence:");

// 1. Convert the string to uppercase
let upperCaseString = userInput.toUpperCase();
console.log("Uppercase:", upperCaseString);

// 2. Convert the string to lowercase
let lowerCaseString = userInput.toLowerCase();
console.log("Lowercase:", lowerCaseString);

// 3. Remove leading and trailing whitespaces
let trimmedString = userInput.trim();
console.log("Trimmed:", trimmedString);

// 4. Replace all occurrences of a specific word
let wordToReplace = prompt("Enter the word to replace:");
let newWord = prompt("Enter the new word:");
let replacedString = userInput.replaceAll(wordToReplace, newWord);
console.log("After Replacement:", replacedString);

// 5. Check if the string includes a specific substring
let searchWord = prompt("Enter a word to check:");
let isPresent = userInput.includes(searchWord);
console.log(`Is "${searchWord}" present?`, isPresent);
alert(`Is "${searchWord}" present? ${isPresent}`);
