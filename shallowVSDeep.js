// Shallow copy and deep copy in JavaScript refer to how objects and arrays are duplicated.
// Shallow copy: Creates a new object/array but shares references to nested objects/arrays.
// Deep copy: Creates a completely independent copy, including all nested structures.

// Example 1: Shallow copy with spread operator (for arrays)
const originalArray = [1, 2, [3, 4]];
const shallowCopyArray = [...originalArray];

console.log("Original array:", originalArray); // [1, 2, [3, 4]]
console.log("Shallow copy:", shallowCopyArray); // [1, 2, [3, 4]]

// Modifying nested array affects both
shallowCopyArray[2][0] = 99;
console.log("After modifying shallow copy nested element:");
console.log("Original:", originalArray); // [1, 2, [99, 4]] - affected!
console.log("Shallow copy:", shallowCopyArray); // [1, 2, [99, 4]]

// Example 2: Shallow copy with Object.assign (for objects)
const originalObject = { a: 1, b: { c: 2 } };
const shallowCopyObject = Object.assign({}, originalObject);

console.log("Original object:", originalObject); // { a: 1, b: { c: 2 } }
console.log("Shallow copy:", shallowCopyObject); // { a: 1, b: { c: 2 } }

// Modifying nested object affects both
shallowCopyObject.b.c = 99;
console.log("After modifying shallow copy nested property:");
console.log("Original:", originalObject); // { a: 1, b: { c: 99 } } - affected!
console.log("Shallow copy:", shallowCopyObject); // { a: 1, b: { c: 99 } }

// Example 3: Deep copy with JSON.parse(JSON.stringify())
// This method works for simple objects/arrays but has limitations (no functions, dates, etc.)
const deepCopyArray = JSON.parse(JSON.stringify(originalArray));
const deepCopyObject = JSON.parse(JSON.stringify(originalObject));

console.log("Deep copy array:", deepCopyArray); // [1, 2, [99, 4]]
console.log("Deep copy object:", deepCopyObject); // { a: 1, b: { c: 99 } }

// Modifying deep copy doesn't affect original
deepCopyArray[2][0] = 100;
deepCopyObject.b.c = 100;
console.log("After modifying deep copies:");
console.log("Original array:", originalArray); // [1, 2, [99, 4]] - unchanged
console.log("Original object:", originalObject); // { a: 1, b: { c: 99 } } - unchanged
console.log("Deep copy array:", deepCopyArray); // [1, 2, [100, 4]]
console.log("Deep copy object:", deepCopyObject); // { a: 1, b: { c: 100 } }

// Example 4: Limitations of JSON deep copy
// Functions, undefined, symbols, and circular references are lost
const complexObject = {
  func: function () {
    return "hello";
  },
  undef: undefined,
  date: new Date(),
  circular: null,
};
complexObject.circular = complexObject; // Circular reference

try {
  const jsonDeepCopy = JSON.parse(JSON.stringify(complexObject));
  console.log("JSON deep copy of complex object:", jsonDeepCopy);
  // Output: { date: "2026-05-02T..." } - func, undef, and circular are lost
} catch (error) {
  console.log("JSON deep copy failed:", error.message);
}

// Example 5: Manual deep copy for simple cases
function deepCopy(obj) {
  if (obj === null || typeof obj !== "object") return obj;
  if (obj instanceof Date) return new Date(obj.getTime());
  if (obj instanceof Array) return obj.map((item) => deepCopy(item));
  if (typeof obj === "object") {
    const copiedObj = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        copiedObj[key] = deepCopy(obj[key]);
      }
    }
    return copiedObj;
  }
}

const manualDeepCopy = deepCopy(originalObject);
manualDeepCopy.b.c = 200;
console.log("After manual deep copy modification:");
console.log("Original:", originalObject); // { a: 1, b: { c: 99 } } - unchanged
console.log("Manual deep copy:", manualDeepCopy); // { a: 1, b: { c: 200 } }

// Example 6: Using structuredClone (modern browsers/Node.js)
if (typeof structuredClone !== "undefined") {
  const structuredDeepCopy = structuredClone(originalObject);
  structuredDeepCopy.b.c = 300;
  console.log("After structuredClone:");
  console.log("Original:", originalObject); // unchanged
  console.log("Structured clone:", structuredDeepCopy);
} else {
  console.log("structuredClone not available in this environment");
}

// Note: Choose the copy method based on your needs:
// - Shallow copy: Use spread (...) or Object.assign() for performance
// - Deep copy: Use JSON methods for simple data, or libraries like Lodash for complex cases
// - Avoid deep copying unless necessary, as it's expensive for large objects
