/**
 * This function divides an array into an given number of equal sub arrays when possible.
 * @param  {[Integer]} inputArray - Array of integers
 * @param  {Integer} numberOfBuckets - Number of buckets to split array into
 * @returns {[[Integer]]} An array of sub arrays
 */
const arrayDivider = (inputArray, numberOfBuckets) => {
  if (!Array.isArray(inputArray) || inputArray.length < 1) {
    throw new Error('Input is not an array. A valid array must be entered');
  }

  if (numberOfBuckets !== parseInt(numberOfBuckets, 10) || Math.sign(numberOfBuckets) !== 1) {
    throw new Error(`Number of buckets must be a positive integar. Recieved: ${numberOfBuckets}`);
  }

  const bucketSize = Math.ceil(inputArray.length / numberOfBuckets);
  const resultArray = [];

  if (inputArray.length % numberOfBuckets === 0) {
    while (inputArray.length + 1 > bucketSize) {
      resultArray.push(inputArray.splice(0, bucketSize));
    }
  } else {
    while (inputArray.length > 0) {
      if (inputArray.length < bucketSize) {
        resultArray.push(inputArray.splice(0, inputArray.length));
      } else {
        resultArray.push(inputArray.splice(0, bucketSize));
      }
    }
  }
  return resultArray;
};

module.exports = {
  arrayDivider,
};
