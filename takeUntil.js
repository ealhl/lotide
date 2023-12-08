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
  console.log(
    `Two arrays are ${
      eqArrays(checkarr, checkArr2) ? "equal" : "not equal"
    }: ${checkarr} and ${checkArr2}`
  );
};

//using .some function to loop through array
const takeUntil = function (array, callback) {
  const results = [];
  array.some((x) => {
    if (!callback(x)) {
      results.push(x);
    } else {
      return results;
    }
  });
  return results;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
console.log(results1.length);

console.log("---");

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const results2 = takeUntil(data2, (x) => x === ",");
console.log(results2);
assertArraysEqual(
  takeUntil(data1, (x) => x < 0),
  [1, 2, 5, 7, 2]
);
assertArraysEqual(
  takeUntil(data2, (x) => x === ","),
  ["I've", "been", "to", "Hollywood"]
);
assertArraysEqual(
  takeUntil([], (x) => x === ","),
  []
);

module.exports = takeUntil;