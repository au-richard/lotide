const eqArrays = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i] || arr1.length !== arr2.length) {
      return false;
    }
  }
  return true;
};

//let test = eqArrays([1, 2], [1, 2]);
//console.log(test);


const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};



const middle = (arr) => {
  let output = [];
  let center = (Math.floor(arr.length / 2));
  if (arr.length <= 2) {
    return output;
  }
  if (arr.length % 2 === 0) {
    output.push(arr[center - 1], arr[center]);
  } else {
    output.push(arr[center]);
  }
  return output;
};

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
assertArraysEqual(middle([1, 2]), []); // => []
assertArraysEqual(middle([7, 4, 1, 9, 8, 6]), [1, 9]); // => [1, 9]