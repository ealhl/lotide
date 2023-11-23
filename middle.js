/* eslint-disable func-style */
const middle = function (arr) {
  let middle = [];
  let length = arr.length;
  if (length <= 2) {
    return middle;
  }
  if (length % 2 === 0) {
    middle.push(Math.floor(arr[length / 2 - 1]));
    middle.push(Math.floor(arr[length / 2]));
  } else {
    middle.push(Math.floor(arr[(length - 1) / 2]));
  }
  return middle;
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

const assertArraysEqual = function (checkarr, checkArr2) {
  if (eqArrays(checkarr, checkArr2)) {
    console.log("Passed, middle value array has return");
  } else {
    console.log("Failed, middle array value is not correct");
  }
};

console.log(middle([1]));
console.log(middle([1, 2]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6]));

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
