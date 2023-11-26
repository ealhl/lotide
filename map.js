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

const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

assertArraysEqual(
  map(words, (word) => word[0]),
  ["g", "c", "t", "m", "t"]
);
assertArraysEqual(
  map(words, (word) => word[1]),
  ["r", "o", "o", "a", "o"]
);
assertArraysEqual(
  map(words, (word) => word[word.length - 1]),
  ["d", "l", "o", "r", "m"]
);
// assertArraysEqual(map(words, (word) => word[2]),[ 'g', 'c', 't', 'm', 't' ]);

