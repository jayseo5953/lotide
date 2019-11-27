const assertEqual = function(actual,expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`✅✅✅Assertion Passed ${actual} === ${expected}`);
  }
};

let eqArrays = function (a,b) {
  if (a.length===b.length) {
    let result = true;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {return false}
    };
    return result
  } else {
    return false
  }
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)