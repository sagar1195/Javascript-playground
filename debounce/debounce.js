// debounce delays execution of `fn` until `delay` ms have passed since the last call.
// Each new call resets the timer, so `fn` only runs after the user stops triggering events.
const debounce = (fn, delay) => {
  let timer; // holds the reference to the pending setTimeout
  return (...args) => {
    clearTimeout(timer); // cancel the previous timer if called again within delay
    timer = setTimeout(() => fn(...args), delay); // schedule fn to run after delay
  };
};

const displayMessage = (message, container) => {
  const p = document.createElement("p");
  p.textContent = message;
  container.appendChild(p);
};

const nonDebounceDiv = document.getElementById("non-debounce");
const debounceDiv = document.getElementById("debounce");

document.getElementById("search").addEventListener("input", (e) => {
  displayMessage(e.target.value, nonDebounceDiv);
});

document.getElementById("search2").addEventListener("input",
  debounce((e) => displayMessage(e.target.value, debounceDiv), 300)
);
