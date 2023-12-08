/* eslint-disable func-style */
const flatten = function (bigBagArr) {
  let candyArr = [];
  for (let i = 0; i < bigBagArr.length; i++) {
    if (Array.isArray(bigBagArr[i])) {
      for (let j = 0; j < bigBagArr[i].length; j++) {
        candyArr.push(bigBagArr[i][j]);
      }
    } else {
      candyArr.push(bigBagArr[i]);
    }
  }
  return candyArr;
};

const assertArraysEqual = function (checkarr, checkArr2) {
  if (eqArrays(checkarr, checkArr2)) {
    console.log(
      "Passed, You take out all of the candy and get it into one single bag,"
    );
  } else {
    console.log("Failed, You have not take out all of the candy and get it into one single bag");
  }
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

const arr3 = [1, 2, [3, 4], 5, [6, 1]];
const arr4 = [1, 2, 3, 4, 5, 6, 1];
assertArraysEqual(flatten(arr3), arr4);

module.exports = flatten;