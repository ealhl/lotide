// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  console.assert(actual === expected);
};

//Create a function tail which returns the "tail" of an array: everything except for the first item (head) of the provided array.

//Your function should not modify the array that is passed in. It should return a new array.
const tail = function (arr) {
  if (Array.isArray(arr) && arr.length > 1) {
    return arr.slice(1);
  } else {
    return [];
  }
};

//TEST CODE
const testArray = ["Hello", "Lighthouse", "Labs"];
const emptyArry = [];
const oneArray = ["Hello"];

const result = tail(testArray);
tail(emptyArry);
tail(oneArray);

assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");
assertEqual(testArray.length, 3);
