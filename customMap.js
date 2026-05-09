// Custom map function that behaves like Array.prototype.map
function customMap(array, callback) {
  if (!Array.isArray(array)) {
    throw new TypeError("First argument must be an array");
  }
  if (typeof callback !== "function") {
    throw new TypeError("Second argument must be a function");
  }

  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (i in array) {
      result.push(callback(array[i], i, array));
    }
  }
  return result;
}

// Example usage:
const numbers = [1, 2, 3, 4];
const squares = customMap(numbers, (value) => value * value);
console.log(squares); // [1, 4, 9, 16]
