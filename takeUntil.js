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

let assertArraysEqual = function (q,p) {
  if (eqArrays(q,p) === true) {
    console.log(`Assertion Passed: ${q} === ${p}`)
  } else if (eqArrays(q,p) === false) {
    console.log (`Assertion Failed: ${q} !== ${p}`)
  }
};

// my solution #1

// const takeUntil = (array, callback) => {
//   let result = [];
//   let i = 0;
//   let arrayOfTF= array.map(callback)
//   while (!arrayOfTF[i]) {result.push(array[i]); i++} 
//   return result;
// };

// function ha (arr) {
//   return arr[0] <0
// }


// my solution #2

const takeUntil = function(array, callback) {
  let candidates = array.filter(callback);
  let target = candidates[0];
  let index = array.indexOf(target);
  return array.slice(0,index)
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);
assertArraysEqual(results1,[1, 2, 5, 7, 2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);
assertArraysEqual(results2,['I\'ve', 'been', 'to', 'Hollywood'])
