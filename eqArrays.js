
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (arr, arr2) {
  if (arr.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
