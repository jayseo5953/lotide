// let eqArrays = function (a,b) {
//   if (a.length===b.length) {
//     let result = true;
//     for (let i = 0; i < a.length; i++) {
//       if (a[i] !== b[i]) {return false}
//     };
//     return result
//   } else {
//     return false
//   }
// };

const eqArrays = require('./eqArrays');

let assertArraysEqual = function (q,p) {
  if (eqArrays(q,p) === true) {
    console.log(`✅✅✅ Assertion Passed: ${q} === ${p}`)
  } else if (eqArrays(q,p) === false) {
    console.log (`🛑🛑🛑 Assertion Failed: ${q} !== ${p}`)
  }
};

module.exports = assertArraysEqual;