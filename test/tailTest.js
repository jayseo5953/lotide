const chai = require('chai');
const tail = require('../tail');
const assert = chai.assert;


describe("#tail", () => {
  it("returns [2, 3, 4, 5] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
  });
});
