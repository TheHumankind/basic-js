const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (arguments.length === 0) {
    return 'Unable to determine the time of year!';
  }

  if (!(date instanceof Date)) {
    throw new Error('argument is not Data');
  }

  date.getYear();

  const month = date.getMonth();

  switch (month) {
    case 0:
      return 'winter';
      break;
    case 11:
      return 'winter';
      break;
    case 1:
      return 'winter';
      break;
    case 2:
      return 'spring';
      break;
    case 3:
      return 'spring';
      break;
    case 4:
      return 'spring';
      break;
    case 5:
      return 'summer';
      break;
    case 6:
      return 'summer';
      break;
    case 7:
      return 'summer';
      break;
    case 8:
      return 'autumn';
      break;
    case 9:
      return 'autumn';
      break;
    case 10:
      return 'autumn';
      break;
  }
};
