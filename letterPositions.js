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


let letterPosisions = function(sentence) {
  const output = {};
  for (let i = 0; i < sentence.length; i ++) {
    if (sentence[i] !== " ") {
      let exist = false;
      for (let key in output) {
        if (sentence[i] === key) {
          exist = true;
        }
      }
      if (exist === false) {
        output[sentence[i]] = [i];
      } else {
        output[sentence[i]].push(i);
      }
    }
  }
  return output;
};

assertArraysEqual(letterPosisions("hello").l,[2,3]);