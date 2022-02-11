const takeUntil = function (array, callback) {
  let result = [];
  for (item of array) {
    if (callback(item)) {
      break;
    }
    result.push(item);
  }
  return result;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

// [ 1, 2, 5, 7, 2 ]
// ---
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]

// const eqArrays = (arr1, arr2) => {
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i] || arr1.length !== arr2.length) {
//       return false;
//     }
//   }
//   return true;
// };

// let test = eqArrays([1, 2], [1, 2]);
// console.log(test);


// const assertArraysEqual = (arr1, arr2) => {
//   const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
//   const results1 = takeUntil(data1, x => x < 0);
//   if (eqArrays(data1, results1)) {
//     console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
//   }
// };

// assertArraysEqual([1, 2, 5, 7, 2, -1, 2, 4, 5], [1, 2, 5, 7, 2]);
