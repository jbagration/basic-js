const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 const seasons = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'fall', 'fall', 'fall', 'winter'];
 function getSeason(date) {
   if (!date) {
     return 'Unable to determine the time of year!';
   }
   if (!(date instanceof Date) || isNaN(date)) {
     throw new Error('Invalid date!');
   }
   const month = date.getMonth();
   return seasons[month];
 }
 

module.exports = {
  getSeason
};
