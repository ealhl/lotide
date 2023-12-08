const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');
const assert = require("chai").assert;

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);

describe("#eqArray", () => {
  it("returns true for [1, 2, 3], [1, 2, 3]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]),true);
  }),
  it("returns false for [1, 2, 3, 4], [3, 2, 1]", () => {
    assert.strictEqual(eqArrays([1, 2, 3, 4], [3, 2, 1]), false);
  });
});