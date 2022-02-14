const assertEqual = require('./assertEqual');

const tail = function (array) {
  if (array.length <= 1) {
    console.log("[]");
  } else {
    console.log(array.slice(1));
  }
};

module.exports = tail;
