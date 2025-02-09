// Take input from user
var userInput = prompt("ENTER A LINE OR WORDS:");

// 1. Convert to uppercase and lowercase
var upperCaseStr = userInput.toUpperCase();
var lowerCaseStr = userInput.toLowerCase();
console.log("CAPITAL LETTERS:", upperCaseStr);
console.log("SMALL LETTERS:", lowerCaseStr);

// 2. Remove extra spaces from start and end
var trimmedStr = userInput.trim();
console.log("WITHOUT SPACES:", trimmedStr);

// 3. Replace a specific word (assuming 'hello' with 'salam')
var replacedStr = userInput.replace(/hello/gi, "salam");
console.log("NEW WORD:", replacedStr);

// 4. Check if it contains a specific word
var checkWord = "Pakistan"; // You can change it
var containsWord = userInput.includes(checkWord);
console.log("IS '" + checkWord + "' AVAIABLE?", containsWord);

// 5. Split into words
var wordsArray = userInput.split(" ");
console.log("SEPARATE WORDS:", wordsArray);
