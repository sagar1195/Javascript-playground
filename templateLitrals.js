// Template literals in JavaScript are string literals enclosed in backticks (`).
// They allow for string interpolation, multi-line strings, and embedded expressions.
// Introduced in ES6, they provide a more readable alternative to string concatenation.

// Example 1: Basic string interpolation
// Use ${} to embed variables or expressions directly into the string.
const name = "Alice";
const age = 30;
const greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting); // Output: Hello, my name is Alice and I am 30 years old.

// Example 2: Expressions in template literals
// You can include any valid JavaScript expression inside ${}.
const a = 5;
const b = 10;
const result = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(result); // Output: The sum of 5 and 10 is 15.

// Example 3: Multi-line strings
// Template literals preserve whitespace and line breaks without needing \n.
const multiLine = `This is a string
that spans multiple
lines without escape sequences.`;
console.log(multiLine);
// Output:
// This is a string
// that spans multiple
// lines without escape sequences.

// Example 4: Nested template literals
// Template literals can be nested for complex string building.
const items = ["apple", "banana", "cherry"];
const list = `Shopping list:
${items.map((item) => `- ${item}`).join("\n")}`;
console.log(list);
// Output:
// Shopping list:
// - apple
// - banana
// - cherry

// Example 5: Escaping backticks
// Use backslash to escape backticks if needed within the literal.
const code = `Here is some code: \`${name}\``;
console.log(code); // Output: Here is some code: `Alice`

// Example 6: Raw strings
// Access the raw string (without processing escape sequences) using String.raw.
const rawString = String.raw`Path: C:\Users\${name}\Documents`;
console.log(rawString); // Output: Path: C:\Users\Alice\Documents

// Note: Template literals are immutable and create new strings each time.
// They are more performant and readable than concatenation for complex strings.
// Use them instead of single/double quotes when interpolation or multi-line is needed.
