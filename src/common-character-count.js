const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(s1, s2) {
  // create an array of length 26 to store the count of each letter in s1
  const count1 = new Array(26).fill(0);
  // create an array of length 26 to store the count of each letter in s2
  const count2 = new Array(26).fill(0);

  // loop through each character in s1 and increment the count for that character
  for (let i = 0; i < s1.length; i++) {
    count1[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
  }

  // loop through each character in s2 and increment the count for that character
  for (let i = 0; i < s2.length; i++) {
    count2[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
  }

  let commonCount = 0;

  // loop through each letter of the alphabet (a to z) and add the minimum count of that letter in both strings to the common count
  for (let i = 0; i < 26; i++) {
    commonCount += Math.min(count1[i], count2[i]);
  }

  return commonCount;
}


module.exports = {
  getCommonCharacterCount
};
