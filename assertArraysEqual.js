const eqArrays = require("./eqArrays");

const assertArraysEqual = function (checkarr, checkArr2) {
  console.log(
    `Two arrays are ${
      eqArrays(checkarr, checkArr2) ? "equal" : "not equal"
    }: ${checkarr} and ${checkArr2}`
  );
};

module.exports = assertArraysEqual;
