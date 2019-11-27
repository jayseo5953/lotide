let eqArrays = function (a,b) {
  if (a.length===b.length) {
    let result = true;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {return false}
    };
    return result
  }
};

let assertArraysEqual = function (q,p) {
  if (eqArrays(q,p) === true) {
    console.log(`Assertion Passed: ${q} === ${p}`)
  } else if (eqArrays(q,p) === false) {
    console.log (`Assertion Failed: ${q} !== ${p}`)
  }
};

assertArraysEqual ([1,2,3],[1,2,3]);