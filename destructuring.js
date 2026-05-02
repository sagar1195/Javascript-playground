// Destructuring in JavaScript allows you to unpack values from arrays or properties from objects into distinct variables.
// It makes code shorter and easier to read when extracting multiple values.

// Example 1: Array destructuring
// Assign values from an array to separate variables.
const rgb = [255, 200, 100];
const [red, green, blue] = rgb;
console.log(red, green, blue); // Output: 255 200 100

// Example 2: Skipping values and default values
// You can skip elements and provide defaults for missing values.
const numbers = [1, 2];
const [first, , third = 3] = [1, 2];
console.log(first, third); // Output: 1 3

// Example 3: Swap variables using destructuring
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a, b); // Output: 2 1

// Example 4: Object destructuring
// Extract properties from an object into variables with the same name.
const user = {
  name: "Alice",
  age: 30,
  city: "New York",
};
const { name, age, city } = user;
console.log(name, age, city); // Output: Alice 30 New York

// Example 5: Object destructuring with renaming and defaults
const person = { firstName: "Bob", country: "USA" };
const {
  firstName: firstNameAlias,
  country: nation,
  job = "Developer",
} = person;
console.log(firstNameAlias, nation, job); // Output: Bob USA Developer

// Example 6: Nested destructuring
const nested = {
  id: 101,
  settings: {
    theme: "dark",
    language: "en",
  },
};
const {
  id,
  settings: { theme, language },
} = nested;
console.log(id, theme, language); // Output: 101 dark en

// Example 7: Destructuring function parameters
// Use destructuring directly in function arguments for cleaner code.
function printUser({ name, age, city }) {
  console.log(`${name} is ${age} years old and lives in ${city}.`);
}
printUser(user); // Output: Alice is 30 years old and lives in New York.

// Example 8: Rest pattern with destructuring
// Gather remaining elements or properties into a new array/object.
const colors = ["red", "green", "blue", "yellow"];
const [primary, ...secondary] = colors;
console.log(primary); // Output: red
console.log(secondary); // Output: ['green', 'blue', 'yellow']

const settings = { theme: "light", layout: "grid", showSidebar: true };
const { theme: currentTheme, ...otherSettings } = settings;
console.log(currentTheme); // Output: light
console.log(otherSettings); // Output: { layout: 'grid', showSidebar: true }

// Example 9: Destructuring with default values for objects
function createUser({ name = "Unknown", age = 0, city = "Unknown" } = {}) {
  return `${name} is ${age} years old and lives in ${city}.`;
}
console.log(createUser({ name: "Charlie", age: 28 }));
// Output: Charlie is 28 years old and lives in Unknown.
console.log(createUser()); // Works without passing an object
// Output: Unknown is 0 years old and lives in Unknown.

// Notes:
// - Array destructuring uses [] and object destructuring uses {}.
// - Destructuring is especially useful for extracting values from function return values and function arguments.
// - Default values help avoid undefined when a value is missing.
