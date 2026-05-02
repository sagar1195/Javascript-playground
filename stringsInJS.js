// Strings in JavaScript are sequences of characters used for text.
// They can be created with single quotes, double quotes, or backticks for template literals.

// Example 1: Creating strings
const singleQuote = "Hello";
const doubleQuote = "World";
const templateLiteral = `Hello, ${doubleQuote}!`;
console.log(singleQuote); // Output: Hello
console.log(doubleQuote); // Output: World
console.log(templateLiteral); // Output: Hello, World!

// Example 2: String length and indexing
const text = "JavaScript";
console.log("Length:", text.length); // Output: 10
console.log("First char:", text[0]); // Output: J
console.log("Last char:", text[text.length - 1]); // Output: t

// Example 3: Common string methods
console.log("Uppercase:", text.toUpperCase()); // Output: JAVASCRIPT
console.log("Lowercase:", text.toLowerCase()); // Output: javascript
console.log("Trimmed:", "  padded  ".trim()); // Output: padded

// Example 4: Searching within strings
console.log("Includes script:", text.includes("script")); // Output: true
console.log("Starts with Java:", text.startsWith("Java")); // Output: true
console.log("Ends with Script:", text.endsWith("Script")); // Output: true
console.log("Index of S:", text.indexOf("S")); // Output: 4
console.log("Last index of a:", text.lastIndexOf("a")); // Output: 3

// Example 5: Extracting parts of strings
console.log("Slice:", text.slice(4, 10)); // Output: Script
console.log("Substring:", text.substring(4, 10)); // Output: Script
console.log("Substr:", text.substr(4, 6)); // Output: Script

// Example 6: Replacing text and repeating
console.log("Replace:", text.replace("Java", "Type")); // Output: TypeScript
console.log("Repeat:", "ha".repeat(3)); // Output: hahaha

// Example 7: Splitting and joining
const csv = "red,green,blue";
const colors = csv.split(",");
console.log("Colors array:", colors); // Output: [ 'red', 'green', 'blue' ]
console.log("Joined:", colors.join(" | ")); // Output: red | green | blue

// Example 8: Template literals and expressions
const firstName = "Alice";
const age = 30;
const message = `Name: ${firstName}, Age: ${age}, Next year: ${age + 1}`;
console.log(message); // Output: Name: Alice, Age: 30, Next year: 31

// Example 9: Escaping characters
const quote = 'She said, "Hello"';
const backtickInTemplate = `Use \`backticks\` carefully`;
console.log(quote);
console.log(backtickInTemplate);

// Example 10: Accessing character codes
console.log("Char code of J:", text.charCodeAt(0)); // Output: 74
console.log("From char code 65:", String.fromCharCode(65)); // Output: A

// Note: Strings are immutable in JavaScript. Methods return new strings and do not change the original.
// Use template literals for readability and concatenation when variables or expressions are involved.
