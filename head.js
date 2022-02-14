const assertEqual = require('./assertEqual');

const head = function (array) {
  if (array === []) {
    return "Undefined";
  } else {
    return array[0];
  }
};

module.exports = head;