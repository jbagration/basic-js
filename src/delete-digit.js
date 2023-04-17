const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  const numStr = n.toString(); // преобразуем число в строку
  let max = 0;

  // проходимся по каждой цифре числа
  for (let i = 0; i < numStr.length; i++) {
    const tempStr = numStr.slice(0, i) + numStr.slice(i + 1); // удаляем текущую цифру

    if (parseInt(tempStr) > max) { // если полученное число больше текущего максимума
      max = parseInt(tempStr); // обновляем максимум
    }
  }

  return max;
}

module.exports = {
  deleteDigit
};
