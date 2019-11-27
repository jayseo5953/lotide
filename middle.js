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
let assertArraysEqual = function(q,p) {
  if (eqArrays(q,p) === true) {
    console.log(`Assertion Passed: ${q} === ${p}`);
  } else if (eqArrays(q,p) === false) {
    console.log(`Assertion Failed: ${q} !== ${p}`);
  }
};

let middle = function(arr) {
  const midIndex = [];
  if (arr.length % 2 !== 0) {
    midIndex.push(Math.floor(arr.length / 2));
  } else {
    midIndex.push(Math.floor(arr.length / 2) - 1);
    midIndex.push(Math.floor(arr.length / 2));
  }
  let result = [];
  for (let w = 0; w < midIndex.length; w ++) {
    result.push(arr[midIndex[w]]);
  }
  return result;
};


let assertMiddle = function(inputArry,outputArray) {
  assertArraysEqual(middle(inputArry),outputArray);
};

assertMiddle([1,2,3,4,5],[3,5]);