const assertEqual = function(actual,expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`✅✅✅Assertion Passed ${actual} === ${expected}`);
  }
};

let findKey = (obj,callback) => {
  let keys = Object.keys(obj);
  let values = [];

  for (let i = 0; i < keys.length; i++) {
    values.push(obj[keys[i]])
  };

  let targetValue = values.filter(callback);
  let index = values.indexOf(targetValue[0]);
  let targetKey = keys[index];
  return targetKey;
  

}

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)) // => "noma"


