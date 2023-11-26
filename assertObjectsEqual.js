const eqArrays = function (arr, arr2) {
  if (arr.length !== arr2.length) {
    return false;
  }
};

const eqObjects = function (object1, object2) {
  if (eqArrays(Object.keys(object1).sort(), Object.keys(object2).sort())) {
    for (let key in object1) {
      //check if key is array
      if (Array.isArray(object1[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else {
        if (object1[key] !== object2[key]) {
          return false;
        }
      }
    }
    return true;
  }
  return false;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect; // <= add this line
  console.log(`Example label: ${inspect(actual)}`);
};

