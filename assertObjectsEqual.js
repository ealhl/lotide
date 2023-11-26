const eqArrays = function (arr, arr2) {
  if (arr.length !== arr2.length) {
    return false;
  }
};

const eqObjects = function (object1, object2) {
  if (eqArrays(Object.keys(object1).sort(), Object.keys(object2).sort())) {
    for (let key in object1) {
      //check if key is array
      console.log("inside the loop");
      if (Array.isArray(object1[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          console.log("array key not same ", object1[key],object2[key]);
          return false;
        }
      } else {
        if (object1[key] !== object2[key]) {
          console.log("key not same", object1[key],object2[key]);
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
  const inspect = require('util').inspect; // <= add this line
  console.log(`Example actual: ${inspect(actual)}`);
  console.log(`Example expected: ${inspect(expected)}`);
  console.log(`Two objects are ${eqObjects(inspect(actual), inspect(actual)) ? 'equal' : 'not equal'}:`, inspect(actual), `and `,inspect(expected));


};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { color: "red", size: "medium",  };

assertObjectsEqual(shirtObject, anotherShirtObject);