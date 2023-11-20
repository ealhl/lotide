const assertEqual = function (actual, expected) {
  console.assert(actual === expected);
};

function eqArrays(arr, arr2) {
  if (arr.length !== arr2.length) {
    return false;
  }

  // eslint-disable-next-line no-var
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
