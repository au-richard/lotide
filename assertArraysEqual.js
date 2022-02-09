
const eqArrays = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i] || arr1.length !== arr2.length) {
      return false;
    }
  }
  return true;
};

let test = eqArrays([1, 2], [1, 2]);
console.log(test);


const assertArrayEqual = (arr1, arr2) => {
  if (eqArrays()) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  }
  console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
};

assertArrayEqual;
