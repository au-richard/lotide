const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns 3 for ['Yo Yo', 'Li ghthouse', 'Labs']", () => {
    const words = ["Yo Yo", "Li  ghthouse", "Labs"];
    tail(words);
    assert.strictEqual(words.length, 3);
  });
});