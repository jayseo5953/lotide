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

let without = function(oriArray,unwantedArray) {
  let ori = oriArray;
  let unwanted = unwantedArray;
  for (let k = 0; k < unwanted.length; k ++) {
    for (let j = 0; j < ori.length; j ++) {
      if (unwanted[k] === ori[j]) {
        ori.splice(k,1);
      }
    }
  }
  return ori;
};

console.log(without([1,2,3],[1]));

let assertWithout = function(inputArry,nowantedArray,outputArray) {
  assertArraysEqual(without(inputArry,nowantedArray),outputArray);
};

assertWithout([1,2,3],[1],[2,3]);
