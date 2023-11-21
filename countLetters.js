/* eslint-disable func-style */
function countLetters(letters) {
  const result = {};
  let lettersTrimLow = letters.toLowerCase().split(" ").join("");

  for (const letter of lettersTrimLow) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }

  return result;
}

const count = countLetters("lighthouse in the house");
console.log(count);

const assertEqual = function (actual, expected) {
  console.assert(actual === expected);
};

assertEqual(count["i"], 2);
assertEqual(count["l"], 1);
assertEqual(count["g"], 1);
assertEqual(count["h"], 4);
assertEqual(count["o"], 2);
