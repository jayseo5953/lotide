// const assertEqual = function(actual,expected) {
//   if (actual !== expected) {
//     console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
//   } else if (actual === expected) {
//     console.log(`✅✅✅Assertion Passed ${actual} === ${expected}`);
//   }
// };

const assertEqual = require('./assertEqual');

const head = function (arr) {
  return arr[0]
};

module.exports = head;