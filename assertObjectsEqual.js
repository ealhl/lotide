const eqArrays = require("./eqArrays");
const eqObjects = require("./eqObjects");

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }

};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { color: "red", size: "medium",  };
const longSleeveShirtObject = {
  size: "medium",
  color: "red",
  sleeveLength: "long",
};

assertObjectsEqual(shirtObject, anotherShirtObject);

module.exports = assertObjectsEqual;