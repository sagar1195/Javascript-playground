function throttle(fn, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

document.addEventListener(
  "mousemove",
  throttle((e) => {
    console.log(e.clientX, e.clientY);
  }, 1000),
);
