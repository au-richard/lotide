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

module.exports = middle;

