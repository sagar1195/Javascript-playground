/* 
    Hoisting is a behavior in JavaScript where the interpreter appears to move declarations (of functions, variables, classes, or imports) to the top of their containing scope before the code actually runs. This means that you can use functions and variables before they are declared in the code.
*/
// Variable hoisting with var
console.log(a); // undefined (declaration hoisted, but not initialization)
var a = 10;
console.log(a); // 10

// Function hoisting
greet(); // "Hello, World!" (entire function hoisted)

function greet() {
  console.log("Hello, World!");
}

// Function expression hoisting
// sayHi(); // ReferenceError: Cannot access 'sayHi' before initialization
const sayHi = function () {
  console.log("Hi!");
};

// let and const are hoisted but not initialized
// console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;

// console.log(c); // ReferenceError: Cannot access 'c' before initialization
const c = 30;

// Hoisting in function scope
function testHoisting() {
  console.log(x); // undefined
  var x = 5;
  console.log(x); // 5
}

testHoisting();
