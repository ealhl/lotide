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

const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (let key of Object.keys(object1)) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
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
};
// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  // console.log(`Example actual: ${inspect(actual)}`);
  // console.log(`Example expected: ${inspect(expected)}`);
  console.log(`Two objects are ${eqObjects(inspect(actual), inspect(actual)) ? 'equal' : 'not equal'}:`, inspect(actual), `and `,inspect(expected));


};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { color: "red", size: "medium",  };

assertObjectsEqual(shirtObject, anotherShirtObject);