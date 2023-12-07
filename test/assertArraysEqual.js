const assertArraysEqual = require('../assertArraysEqual');

const arr = [1, 2, 3];
const arr2 = [3, 2, 1];
assertArraysEqual(arr, arr);
assertArraysEqual(arr, arr2);

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };

const longSleeveShirtObject = {
  size: "medium",
  color: "red",
  sleeveLength: "long",
};