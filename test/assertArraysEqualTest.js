const assertArraysEqual = require("../assertArraysEqual");

const arr = [1, 2, 3];
const arr2 = [3, 2, 1];

assertArraysEqual(arr, arr);
assertArraysEqual(arr, arr2);
