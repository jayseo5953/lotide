const assertEqual = function(actual,expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`✅✅✅Assertion Passed ${actual} === ${expected}`);
  }
};

let findKeyByValue = function(inputObj,value) {
  let result;
  for (let ele in inputObj) {
    if (inputObj[ele] === value) {
      result = ele;
    }
  }
  return result;
};

let bestTvShows = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

console.log(findKeyByValue(bestTvShows,"The Wire"));
assertEqual(findKeyByValue(bestTvShows,"The Wire"),"drama");
