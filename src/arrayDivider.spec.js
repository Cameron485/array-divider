const { expect } = require('chai');

const { arrayDivider } = require('./arrayDivider');

describe('Array divider', () => {
  it('Should validate the input array as an array', () => {
    const inputArray = 'Not an array';
    const numberOfBuckets = 2;
    expect(() => arrayDivider(inputArray, numberOfBuckets)).to.throw('Input is not an array. A valid array must be entered');
  });

  it('Should throw an error when numberOfBuckets is a negative integer', () => {
    const inputArray = [1, 3, 6];
    const numberOfBuckets = -3;
    expect(() => arrayDivider(inputArray, numberOfBuckets)).to.throw(`Number of buckets must be a positive integar. Recieved: ${numberOfBuckets}`);
  });

  it('Should throw an error when numberOfBuckets is a float', () => {
    const inputArray = [1, 3, 6];
    const numberOfBuckets = 3.14;
    expect(() => arrayDivider(inputArray, numberOfBuckets)).to.throw(`Number of buckets must be a positive integar. Recieved: ${numberOfBuckets}`);
  });

  it('Should validate the given example', () => {
    const inputArray = [1, 2, 3, 4, 5];
    const numberOfBuckets = 3;
    expect(arrayDivider(inputArray, numberOfBuckets)).to.eql([[1, 2], [3, 4], [5]]);
  });

  it('Should split the array equally when possible', () => {
    const inputArray = [1, 2, 3, 4, 5, 6];
    const numberOfBuckets = 3;
    expect(arrayDivider(inputArray, numberOfBuckets)).to.eql([[1, 2], [3, 4], [5, 6]]);
  });
});
