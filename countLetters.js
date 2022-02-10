const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = (string) => {
  const result = {}
  for (let item of string) {
    if (result[item]) {
      result[item] += 1;
    } else {
      result[item] = 1;
    }
    //console.log(item);
  }
  return result;
}

console.log(countLetters("lighthouse in the house"));
console.log(countLetters("lighthouse labs"));