// const assertEqual = require('../assertEqual');
const tail = require("../tail");
const assert = require("chai").assert;

//TEST CODE
describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  }),
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), [
      "Lighthouse",
      "Labs",
    ]);
  }),
  it("returns [6, 7] for [5, 6, 7],", () => {
    assert.deepEqual(tail([5, 6, 7]),[6, 7]);
  });
});
