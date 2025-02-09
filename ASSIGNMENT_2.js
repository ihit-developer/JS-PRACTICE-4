// Simple array operations
var numbers = [42, 7, 23, 56, 12, 89, 34];
console.log("Asli array:", numbers);

// 1. Sort ascending and descending
numbers.sort(); 
console.log("Worng sorting:", numbers);

numbers.sort((a, b) => a - b); // Sahi ascending order
console.log("Ascending order:", numbers);

numbers.sort((a, b) => b - a); // Descending order
console.log("Big to  snmall:", numbers);

// 2. Add and remove elements
numbers.push(99); // Akhir mein ek number daal dia
console.log("Add 99 to end:", numbers);

numbers.pop(); // Akhir ka number hata diya
console.log("Remove last element:", numbers);

numbers.unshift(5); // Shuru mein ek number daal dia
console.log("Add 5 to beginnig:", numbers);

numbers.shift(); // Shuru ka number hata diya
console.log("Remove element from  start:", numbers);

// 3. Find index of a specific element
var searchNumber = 23;
var index = numbers.indexOf(searchNumber);
console.log("please " + searchNumber + " index number:", index);

// 4. Convert array to string
var arrayAsString = numbers.join(", ");
console.log("Array to string:", arrayAsString);

// 5. Reverse array
numbers.reverse(); 
console.log("changes postion:", numbers);
