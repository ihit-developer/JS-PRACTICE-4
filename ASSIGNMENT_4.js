
let myArray = ["Apple", "Banana", "Mango"];

console.log("Original Array:", myArray);

// 1. Add elements to the end of the array
myArray.push("Orange");
console.log("After push:", myArray);

// 2. Remove an element from the end of the array
myArray.pop();
console.log("After pop:", myArray);

// 3. Add elements to the beginning of the array
myArray.unshift("Grapes");
console.log("After unshift:", myArray);

// 4. Remove an element from the beginning of the array
myArray.shift();
console.log("After shift:", myArray);

// 5. Find the index of a specific element
let index = myArray.indexOf("Banana");
console.log("Index of Banana:", index);
