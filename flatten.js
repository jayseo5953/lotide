let eqArrays = function(a,b) {
  if (a.length === b.length) {
    let result = true;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }
    return result;
  } else {
    return false;
  }
};

let assertArraysEqual = function(q,p) {
  if (eqArrays(q,p) === true) {
    console.log(`Assertion Passed: ${q} === ${p}`);
  } else if (eqArrays(q,p) === false) {
    console.log(`Assertion Failed: ${q} !== ${p}`);
  }
};

let flatten = function(bigArr) {
  for (let i = 0; i < bigArr.length; i++) {
    if (Array.isArray(bigArr[i])) {
      let sli = bigArr[i];
      bigArr.splice(i,1);
      for (const ele of sli) {
        bigArr.push(ele);
      }
    }
  } return bigArr.sort();
};

let assertFlatten = function(inputArry,outputArray) {
  assertArraysEqual(flatten(inputArry),outputArray);
};

assertFlatten([1, 2, [3, 4], 5, [6]],[1,2,3,4,5,6]);