const assertEqual = function(actual,expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`✅✅✅Assertion Passed ${actual} === ${expected}`);
  }
};


const countOnly = function(allItems, itemsToCount) {
  let output = {};
  for (let key in itemsToCount) {
    if (itemsToCount[key] === true) {
      output[key] = 0;
      for (let ele of allItems) {
        if (ele === key) {
          output[key] ++;
        }
      }
      if (output[key] === 0) {
        delete output[key];
      }
    }
  }
  return output;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });



assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);