// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const lighthouse = 'LighthouseLabse';
const bc = 'Bootcamp';

// TEST CODE
assertEqual(lighthouse, bc);
assertEqual(1, 1);

const name = 'Alice';
console.log(`Hello, ${name}!`);