// Spread and rest operators in JavaScript both use the same syntax: ...
// The meaning changes based on context: spread expands values, rest collects values.

// Example 1: Spread with arrays
// Use spread to expand array elements into a new array.
const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5];
console.log("Spread array:", moreNumbers); // Output: [1, 2, 3, 4, 5]

// Example 2: Spread to copy arrays (shallow copy)
const original = [10, 20, 30];
const copy = [...original];
copy.push(40);
console.log("Original:", original); // Output: [10, 20, 30]
console.log("Copy:", copy); // Output: [10, 20, 30, 40]

// Example 3: Spread with objects
// Use spread to merge or clone object properties.
const person = { name: "Alice", age: 30 };
const extra = { city: "New York" };
const merged = { ...person, ...extra };
console.log("Merged object:", merged);
// Output: { name: 'Alice', age: 30, city: 'New York' }

// Example 4: Object spread with overriding properties
const updated = { ...person, age: 31 };
console.log("Updated object:", updated); // age becomes 31

// Example 5: Spread in function calls
// Spread can expand array elements into individual arguments.
function add(a, b, c) {
  return a + b + c;
}
console.log("Add result:", add(...numbers)); // Output: 6

// Example 6: Rest with function parameters
// Rest collects remaining arguments into an array.
function sum(first, ...rest) {
  console.log("First:", first);
  console.log("Rest:", rest);
  return rest.reduce((total, num) => total + num, first);
}
console.log("Sum total:", sum(1, 2, 3, 4));
// Output:
// First: 1
// Rest: [2, 3, 4]
// Sum total: 10

// Example 7: Rest with array destructuring
const colors = ["red", "green", "blue", "yellow"];
const [primary, ...secondary] = colors;
console.log("Primary:", primary); // Output: red
console.log("Secondary:", secondary); // Output: ['green', 'blue', 'yellow']

// Example 8: Rest with object destructuring
const settings = { theme: "dark", layout: "grid", debug: true };
const { theme, ...otherSettings } = settings;
console.log("Theme:", theme); // Output: dark
console.log("Other settings:", otherSettings); // Output: { layout: 'grid', debug: true }

// Notes:
// - Spread is used in array/object literals and function calls to expand values.
// - Rest is used in function parameters and destructuring to collect remaining values.
// - Both use ... but the meaning depends on where they appear.
// - Spread and rest are useful for immutably copying arrays/objects and handling variable arguments.
