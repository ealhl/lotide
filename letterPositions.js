/* eslint-disable func-style */
const letterPositions = function (sentence) {
  const results = {};
  // logic to update results here
  let pos = 0;
  for (const letter of sentence) {
    if (letter === " ") {
      pos++;
    } else if (results[letter]) {
      results[letter].push(pos);
      pos++;
    } else {
      results[letter] = [];
      results[letter].push(pos);
      pos++;
    }
  }

  return results;
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

function assertArraysEqual(checkarr, checkArr2) {
  if (eqArrays(checkarr, checkArr2)) {
    console.log("pass");
  } else {
    console.log("fail");
  }
}

console.log(letterPositions("lighthouse in the house"));

assertArraysEqual(letterPositions("lighthouse in the house").e, [9, 16, 22]);
assertArraysEqual(letterPositions("lighthouse in the house").l, [0]);
