// Arrays in JavaScript are ordered collections of elements that can hold any data type.
// They are dynamic, resizable, and zero-indexed.
// Arrays are objects with special properties and methods.

// Example 1: Creating arrays
// Use array literals [] or the Array constructor.
const emptyArray = [];
const numbers = [1, 2, 3, 4, 5];
const mixed = [1, "hello", true, { key: "value" }];
const fromConstructor = new Array(5); // Creates array with 5 undefined elements
const fromConstructor2 = new Array(1, 2, 3); // Creates [1, 2, 3]
console.log("Empty array:", emptyArray);
console.log("Numbers:", numbers);
console.log("Mixed:", mixed);

// Example 2: Accessing elements
// Use bracket notation with zero-based indices.
console.log("First element:", numbers[0]); // 1
console.log("Last element:", numbers[numbers.length - 1]); // 5
console.log("Out of bounds:", numbers[10]); // undefined

// Example 3: Modifying arrays
// Arrays are mutable - you can change elements.
numbers[0] = 10;
console.log("Modified numbers:", numbers); // [10, 2, 3, 4, 5]

// Example 4: Array methods - Adding/Removing elements
const fruits = ["apple", "banana"];

// push() - Add to end
fruits.push("cherry");
console.log("After push:", fruits); // ['apple', 'banana', 'cherry']

// pop() - Remove from end
const removed = fruits.pop();
console.log("Popped:", removed); // 'cherry'
console.log("After pop:", fruits); // ['apple', 'banana']

// unshift() - Add to beginning
fruits.unshift("orange");
console.log("After unshift:", fruits); // ['orange', 'apple', 'banana']

// shift() - Remove from beginning
fruits.shift();
console.log("After shift:", fruits); // ['apple', 'banana']

// Example 5: Array methods - Searching and finding
const nums = [1, 2, 3, 4, 5, 3];

// indexOf() - Find index of element
console.log("Index of 3:", nums.indexOf(3)); // 2
console.log("Last index of 3:", nums.lastIndexOf(3)); // 5

// includes() - Check if element exists
console.log("Includes 4:", nums.includes(4)); // true

// find() - Find first element matching condition
const found = nums.find((num) => num > 3);
console.log("First > 3:", found); // 4

// findIndex() - Find index of first matching element
const foundIndex = nums.findIndex((num) => num > 3);
console.log("Index of first > 3:", foundIndex); // 3

// Example 6: Array methods - Transformation
const original = [1, 2, 3, 4, 5];

// map() - Transform each element
const doubled = original.map((num) => num * 2);
console.log("Doubled:", doubled); // [2, 4, 6, 8, 10]

// filter() - Filter elements based on condition
const evens = original.filter((num) => num % 2 === 0);
console.log("Evens:", evens); // [2, 4]

// reduce() - Reduce array to single value
const sum = original.reduce((acc, num) => acc + num, 0);
console.log("Sum:", sum); // 15

// Example 7: Array methods - Iteration
const colors = ["red", "green", "blue"];

// forEach() - Execute function for each element
colors.forEach((color, index) => {
  console.log(`${index}: ${color}`);
});
// Output:
// 0: red
// 1: green
// 2: blue

// Example 8: Array methods - Slicing and splicing
const letters = ["a", "b", "c", "d", "e"];

// slice() - Extract portion (non-destructive)
const sliced = letters.slice(1, 4);
console.log("Sliced (1-4):", sliced); // ['b', 'c', 'd']
console.log("Original after slice:", letters); // ['a', 'b', 'c', 'd', 'e']

// splice() - Remove/replace elements (destructive)
const spliced = letters.splice(2, 2, "x", "y");
console.log("Spliced out:", spliced); // ['c', 'd']
console.log("After splice:", letters); // ['a', 'b', 'x', 'y', 'e']

// Example 9: Array methods - Sorting and reversing
const unsorted = [3, 1, 4, 1, 5];

// sort() - Sort elements (modifies original)
unsorted.sort();
console.log("Sorted:", unsorted); // [1, 1, 3, 4, 5]

// reverse() - Reverse order
unsorted.reverse();
console.log("Reversed:", unsorted); // [5, 4, 3, 1, 1]

// Example 10: Multidimensional arrays
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log("Matrix[1][2]:", matrix[1][2]); // 6

// Example 11: Array destructuring (ES6)
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log("First:", first); // 1
console.log("Second:", second); // 2
console.log("Rest:", rest); // [3, 4, 5]

// Example 12: Spread operator (ES6)
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log("Combined:", combined); // [1, 2, 3, 4, 5, 6]

// Note: Arrays have a length property and many built-in methods.
// They are reference types, so assignment copies the reference, not the array.
// Use spread operator or Array.from() for shallow copying.
// For deep copying, consider libraries like Lodash or JSON.parse(JSON.stringify()).
