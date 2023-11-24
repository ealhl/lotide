const assertEqual = function (actual, expected) {
  console.assert(actual === expected);
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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  for (let key in object1) {
    //check key array length is same
    if (eqArrays(Object.keys(object1).sort(), Object.keys(object2).sort())) {
      //check if key is array
      if (Array.isArray(object1[key])) {
        for (let objKey of object1[key]) {
          if (!object2[key].includes(objKey)) {
            console.log("objKey", objKey);
            return false;
          }
        } //check if key is not array
      } else {
        if (object1[key] !== object2[key]) {
          return false;
        }
      }
    }
  }
};

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
};
eqObjects(multiColorShirtObject, anotherMultiColorShirtObject); // => true

const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};
eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject); // => false
