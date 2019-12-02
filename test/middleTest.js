const middle = require('../middle')
const assert = require('chai').assert;



describe("#middle", () => {
  it("returns 3 for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
});

// AassertArraysEqual(middle([1,2,3,4,5]),[3]);