const assertEqual = function(actual,expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`✅✅✅Assertion Passed ${actual} === ${expected}`);
  }
};

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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    let matchingNum = 0;
    for (let key1 in object1) {
      for (let key2 in object2) {
        // case String
        if (typeof(object1[key1]) !== 'object' && typeof(object2[key2]) !== 'object') {
          // console.log(`${key1} and ${key2} are strings`);
          if (key1 === key2) {
            if (object1[key1] === object2[key2]) {
              matchingNum ++;
            }
          }
        // case Array
        } else if (Array.isArray(object1[key1]) === true && Array.isArray(object2[key2]) === true) {
          // console.log(`${key1} and ${key2} are arrays`);
          if (key1 === key2) {
            if (eqArrays(object1[key1],object2[key2]) === true) {
              matchingNum ++;
            }
          }
        }
      }
    }
    if (matchingNum === Object.keys(object1).length) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc));// => false

const cd = { c: 1, d: ["2", 3] };
const dc = { d: ["2", 3], c: 1 };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false

// const tester = function (a,b) {
//   for (let k1 in a) {
//     for (let k2 in b) {
//       if (Array.isArray(a[k1])===true && Array.isArray(b[k2])===true){
//         if (eqArrays(a[k1],b[k2])===true){
//           console.log("hha")
//         }
//       }
//     }
//   }
// }

// tester(cd,dc)