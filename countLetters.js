const assertEqual = require('./assertEqual');
/* eslint-disable func-style */
const countLetters = function (letters) {
  const result = {};
  let lettersTrimLow = letters.split(" ").join("");

  for (const letter of lettersTrimLow) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }

  return result;
};

const count = countLetters("lighthouse in the house");
console.log(count);

assertEqual(count["i"], 2);
assertEqual(count["l"], 1);
assertEqual(count["g"], 1);
assertEqual(count["h"], 4);
assertEqual(count["o"], 2);

module.exports = countLetters;
