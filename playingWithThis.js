// The 'this' keyword in JavaScript refers to the context object that the function is executed in.
// Its value depends on how the function is called, not where it's defined.
// Common contexts: global, object method, constructor, arrow function, explicit binding.

// Example 1: In global scope, 'this' refers to the global object (window in browser, global in Node.js).
console.log("Global this:", this); // In Node.js, outputs the global object

// Example 2: When a function is called as a method of an object, 'this' refers to that object.
const person = {
  name: "Alice",
  greet: function () {
    console.log("Hello, my name is " + this.name);
  },
};
person.greet(); // Output: Hello, my name is Alice

// Example 3: In a constructor, 'this' refers to the newly created instance.
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.introduce = function () {
    console.log("I am " + this.name + ", " + this.age + " years old.");
  };
}
const alice = new Person("Alice", 30);
alice.introduce(); // Output: I am Alice, 30 years old.

// Example 4: Arrow functions do not have their own 'this'. They inherit 'this' from the code that surrounds them (lexical scope).
const obj = {
  name: "Object",
  regularFunc: function () {
    console.log("Regular function this:", this.name); // Refers to obj
  },
  arrowFunc: () => {
    console.log("Arrow function this:", this.name); // Inherits from global scope (undefined in strict mode)
  },
};
obj.regularFunc(); // Output: Regular function this: Object
obj.arrowFunc(); // Output: Arrow function this: undefined

// Example 5:  You can explicitly set 'this' using call, apply, or bind.
function sayHello() {
  console.log("Hello, " + this.name);
}
const user = { name: "Bob" };
sayHello.call(user); // Output: Hello, Bob
sayHello.apply(user); // Output: Hello, Bob
const boundSayHello = sayHello.bind(user);
boundSayHello(); // Output: Hello, Bob

// Example 6: In DOM event handlers, 'this' refers to the element that triggered the event.
// button.addEventListener('click', function() {
//   console.log(this); // Refers to the button element
// });

// Example 7: Class methods (ES6)
// In class methods, 'this' refers to the instance.
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name + " makes a sound.");
  }
}
const dog = new Animal("Dog");
dog.speak(); // Output: Dog makes a sound.

// Note: 'this' can be tricky. Always consider the calling context.
// Use arrow functions when you want to preserve lexical 'this'.
// Use bind, call, or apply for explicit control.
