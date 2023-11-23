/* eslint-disable func-style */
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

const assertArraysEqual = function (checkarr, checkArr2) {
  if (eqArrays(checkarr, checkArr2)) {
    console.log("Two arrays are equal");
  } else {
    console.log("Two arrays are not equal");
  }
};

const arr = [1, 2, 3];
const arr2 = [3, 2, 1];
assertArraysEqual(arr, arr);
assertArraysEqual(arr, arr2);
