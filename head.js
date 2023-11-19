// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  console.assert(actual === expected);
};

// HEAD FUNCTION IMPLEMENTATION
const head = function (array) {
  if (array.length > 0) {
    return array[0];
  }
};

console.log(head([]));
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
