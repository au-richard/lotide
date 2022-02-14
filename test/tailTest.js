const assertEqual = require('../assertEqual');
const tail = require('../tail');

const words = ["Yo Yo", "Li  ghthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);     