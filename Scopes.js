let b;
/* 
    let is the preferred way to declare variables that you expect to change later (like a counter in a loop).
    
    Block Scoped: It only exists within the curly braces {} where it was born. This prevents bugs where variables "leak" into other parts of your code.

    No Redeclaration: You cannot accidentally declare the same variable twice in the same scope
*/

const c = 0;
const d = [1, 2, 3];
const e = { name: "Alice", age: 30 };

d.push(4); // This is allowed because we're not reassigning d, just modifying its contents.
e.name = "Bob"; // This is also allowed for the same reason.
console.log("D: ", d, " E: ", e);
/*
    const is for values that should not be reassigned
    
    Not Immutable: While you can't reassign a const (e.g., c = 2), if the value is an object or array, you can still change the properties or elements inside it.

    Must Initialize: You cannot declare a const without giving it a value immediately.
*/

(() => {
  a = 10;
  b = 20;
  // c=30; // Error: Assignment to constant variable.
  console.log("A: ", a, " B: ", b, " C: ", c);
  var a = 100;
  console.log("A: ", a, " B: ", b, " C: ", c);
})();

var a;

/*  
    var was the only way to declare variables before 2015. It is generally avoided in modern code because it has "leaky" scope.

    Function Scoped: If you declare a var inside an if block, it is still accessible outside that block as long as it's within the same function.
    
    Hoisting: You can use a var variable before it's defined without the code crashing (it just returns undefined).
*/

console.log("A: ", a, " B: ", b, " C: ", c);
