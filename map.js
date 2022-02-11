const words = ["ground", "control", "to", "major", "tom"];


const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;

}


// const results1 = map(words, word => word.toUpperCase());
// console.log(results1);

const eqArrays = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i] || arr1.length !== arr2.length) {
      return false;
    }
  }
  return true;
};


const assertArraysEqual = (arr1, arr2) => {
  const results1 = map(arr1, word => word[0]);
  console.log(results1);
  if (eqArrays(results1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

assertArraysEqual(["hello", "how", "are", "you"], ["h", "h", "a", "y"]);
