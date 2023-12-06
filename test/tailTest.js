const assertEqual = require('../assertEqual');
const tail = require('../tail');

//TEST CODE
const testArray = ["Hello", "Lighthouse", "Labs"];
const emptyArry = [];
const oneArray = ["Hello"];

const result = tail(testArray);
tail(emptyArry);
tail(oneArray);

assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");
assertEqual(testArray.length, 3);
