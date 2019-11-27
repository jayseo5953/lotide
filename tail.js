const assertEqual = function(actual,expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`✅✅✅Assertion Passed ${actual} === ${expected}`);
  }
};

let tail = function (arr) {
  return arr.slice(1)
};

let arrEqual = function (arr1,arr2) {
  if (arr1.length === arr2.length){
   for (let i = 0; i<arr1.length; i++) {
    assertEqual(arr1[i],arr2[i]);
   };
  } else {
  console.log("the length of the two arrays are different!")
  };
};


const result = tail(["Hello", "Lighthouse", "Labs"]);
arrEqual(result, ["Lighthouse", "Labs"])