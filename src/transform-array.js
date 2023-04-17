const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('arr parameter must be an instance of the Array!');
  }

  const result = [];
  let discardNext = false;
  let duplicateNext = false;

  for (let i = 0; i < arr.length; i++) {
    if (discardNext) {
      discardNext = false;
      continue;
    }

    if (arr[i] === '--discard-next') {
      discardNext = true;
      continue;
    }

    if (duplicateNext) {
      result.push(arr[i], arr[i]);
      duplicateNext = false;
      continue;
    }

    if (arr[i] === '--double-next') {
      duplicateNext = true;
      continue;
    }

    if (i > 0 && arr[i - 1] === '--discard-next') {
      continue;
    }

    if (i > 0 && arr[i - 1] === '--double-next') {
      result.push(arr[i]);
      result.push(arr[i]);
      continue;
    }

    result.push(arr[i]);
  }

  return result;
}


module.exports = {
  transform
};
