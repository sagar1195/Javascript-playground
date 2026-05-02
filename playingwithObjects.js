// Objects in JavaScript are collections of key-value pairs.
// They are used to model real-world entities, store data, and group related behavior.

// Example 1: Creating objects
const person = {
  name: "Alice",
  age: 30,
  job: "Developer",
};
console.log("Person:", person);

// Example 2: Accessing object properties
console.log("Name:", person.name); // Dot notation
console.log("Age:", person["age"]); // Bracket notation

// Example 3: Adding and modifying properties
person.city = "London";
person.age = 31;
console.log("Updated person:", person);

// Example 4: Deleting properties
delete person.job;
console.log("After delete:", person);

// Example 5: Nested objects
const company = {
  name: "Tech Co",
  address: {
    street: "123 Main St",
    city: "London",
    zip: "SW1A 1AA",
  },
  employees: [
    { name: "Alice", role: "Developer" },
    { name: "Bob", role: "Designer" },
  ],
};
console.log("Company city:", company.address.city);
console.log("First employee role:", company.employees[0].role);

// Example 6: Object methods
const calculator = {
  add(a, b) {
    return a + b;
  },
  multiply(a, b) {
    return a * b;
  },
};
console.log("Add:", calculator.add(2, 3));
console.log("Multiply:", calculator.multiply(4, 5));

// Example 7: 'this' inside object methods
const user = {
  name: "Bob",
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
};
user.greet();

// Example 8: Object destructuring
const { name, age, city } = person;
console.log("Destructured:", name, age, city);

// Example 9: Iterating object properties
const settings = {
  darkMode: true,
  notifications: false,
  autoSave: true,
};
for (const key in settings) {
  if (Object.prototype.hasOwnProperty.call(settings, key)) {
    console.log(`${key}: ${settings[key]}`);
  }
}

// Example 10: Object.keys / values / entries
console.log("Keys:", Object.keys(settings));
console.log("Values:", Object.values(settings));
console.log("Entries:", Object.entries(settings));

// Example 11: Shallow copy
const original = { a: 1, b: { c: 2 } };
const shallowCopy = Object.assign({}, original);
shallowCopy.a = 10;
shallowCopy.b.c = 20;
console.log("Original after shallow copy change:", original);
console.log("Shallow copy:", shallowCopy);
// Note: nested object b is shared between original and shallowCopy.

// Example 12: Deep copy
const deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.b.c = 99;
console.log("Original after deep copy change:", original);
console.log("Deep copy:", deepCopy);
// Note: JSON deep copy works for plain data but not for functions, Dates, Maps, Sets, or undefined.

// Example 13: Object spread (shallow copy)
const spreadCopy = { ...original, d: 4 };
console.log("Spread copy:", spreadCopy);

// Example 14: Object.freeze
const frozen = Object.freeze({ x: 1 });
// frozen.x = 2; // Has no effect in non-strict mode, throws in strict mode
console.log("Frozen object:", frozen);

// Example 15: Creating objects with Object.create
const proto = {
  describe() {
    return `Name: ${this.name}`;
  },
};
const instance = Object.create(proto);
instance.name = "Charlie";
console.log(instance.describe());

// Summary
// Objects are flexible and powerful. Use them for structured data, methods, and shared behavior.
// Remember: assignment copies references, not object contents, so use shallow or deep copy when needed.
