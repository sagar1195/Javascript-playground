// Arrow functions in JavaScript provide a concise syntax for writing function expressions.
// They do not have their own 'this', 'arguments', 'super', or 'new.target' bindings.
// They are always anonymous and cannot be used as constructors.

// Example 1: This creates a simple function that logs a message when called.
const greet = () => {
  console.log("Hello, World!");
};
greet(); // Output: Hello, World!

// Example 2: Single parameters don't need parentheses.
const square = (x) => x * x;
console.log(square(5)); // Output: 25

// Example 3: Multiple parameters require parentheses. This adds two numbers.
const add = (a, b) => a + b;
console.log(add(3, 4)); // Output: 7

// Example 4: Use curly braces for multi-line functions. This calculates the area of a rectangle.
const area = (width, height) => {
  const result = width * height;
  return result;
};
console.log(area(10, 5)); // Output: 50

// Example 5: Wrap the object in parentheses to return it directly. This creates a person object.
const createPerson = (name, age) => ({ name, age });
console.log(createPerson("Alice", 30)); // Output: { name: 'Alice', age: 30 }

// Example 6: Arrow functions inherit 'this' from their surrounding scope, unlike regular functions.
const obj = {
  name: "Object",
  regularFunc: function () {
    setTimeout(function () {
      console.log(this.name); // 'this' refers to the global object or undefined in strict mode
    }, 100);
  },
  arrowFunc: function () {
    setTimeout(() => {
      console.log(this.name); // 'this' refers to the obj
    }, 100);
  },
};
obj.regularFunc(); // Output: undefined (or global object)
obj.arrowFunc(); // Output: Object

// Example 7: Arrow functions can be used in Immediately invoked arrow function expression (IIFE) for encapsulation.
(() => {
  const secret = "This is private";
  console.log(secret);
})(); // Output: This is private

// Note: Arrow functions cannot be used as constructors and don't have a prototype property.
// They are best for non-method functions, callbacks.
