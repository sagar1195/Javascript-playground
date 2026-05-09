// Import JSON data from the data.json file
import data from "./data.json" with { type: "json" };

// Use structuredClone to create a deep copy of the data object
const clone = structuredClone(data);

// Log the original users array
console.log("Original: ", data.users);

// Modify the name in the cloned data (this should not affect the original)
clone.users[0].name = "Sagar";

// Log the cloned users array after modification
console.log("Cloned: ", clone.users);

// Log the original users array to verify it wasn't changed
console.log("Original after modification: ", data.users);
