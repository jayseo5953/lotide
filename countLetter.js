const assertEqual = function(actual,expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`✅✅✅Assertion Passed ${actual} === ${expected}`);
  }
};

let countLetters = function(str) {
  let output = {};
  for (let ele of str) {
    if (ele !== " ") {
      let exist = false;
      for (let key in output) {
        if (ele === key) {
          exist = true;
        }
      }
      if (exist === false) {
        output[ele] = 1;
      } else {
        output[ele]++;
      }
    }
  } return output;
};

let result1 = countLetters("abbccc");
let result2 = countLetters("aaabbc");
let result3 = countLetters("aabbcc");

assertEqual(result1['c'], 3);
assertEqual(result2["c"], 1);
assertEqual(result3["c"], 2);
