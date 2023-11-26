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

const assertEqual = function (actual, expected) {
  console.assert(actual === expected);
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects2 = function (object1, object2) {
  console.log("---");
  console.log("start");
  console.log("Object.keys(object1).length", Object.keys(object1).length);
  console.log("Object.keys(object2).length", Object.keys(object2).length);
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  console.log("after checking");
  for (let key of Object.keys(object1)) {
    console.log("key", key);
    if (Array.isArray(object1[key])) {
      console.log(object1[key]);
      console.log(object2[key]);
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else {
      console.log("object1[key]", object1[key]);
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
};
// eqObjects2(multiColorShirtObject, anotherMultiColorShirtObject); // => true

const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};
// eqObjects2(multiColorShirtObject, longSleeveMultiColorShirtObject); // => false
assertEqual(
  eqObjects2(multiColorShirtObject, anotherMultiColorShirtObject),
  true
);
assertEqual(
  eqObjects2(multiColorShirtObject, longSleeveMultiColorShirtObject),
  false
);
