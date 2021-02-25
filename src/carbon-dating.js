const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (!sampleActivity || !isNaN(sampleActivity) || typeof(sampleActivity) != 'array') {
    return false;
  }
  let activity = MODERN_ACTIVITY / Number(sampleActivity),
      k = 0.693 / HALF_LIFE_PERIOD,
      t = Math.log10(activity) / k;
  return Math.ceil(t);
};
