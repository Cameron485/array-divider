const { arrayDivider } = require('./src/arrayDivider');

const inputArray = [1, 2, 3, 4, 5];
const numberOfBuckets = 3;

const result = arrayDivider(inputArray, numberOfBuckets);
console.log(result);
