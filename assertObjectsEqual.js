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

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(a, b) {
  const inspect = require('util').inspect;
  if (eqObjects(a,b) === true) {
    console.log(`✅✅✅Assertion Passed ${inspect(a)} === ${inspect(b)}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${inspect(a)} !== ${inspect(b)}`);
  }
};

let ob1= { a: '1', b: 2 };
let ob2= { b: 2, a: '1' };

assertObjectsEqual(ob1,ob2);