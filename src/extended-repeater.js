const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  let result = '',
      sep = '',
      addSep = '';

  if(options.addition === null){
    options.addition = 'null';
  }

  if(str === null){
    str = 'null';
  }
  
  if(options.separator == undefined){
    sep = '+';
  } else {
    sep = options.separator;
  }

  if(options.additionSeparator == undefined){
    addSep = '|';
  } else {
    addSep = options.additionSeparator;
  }

  if(options.repeatTimes == undefined) options.repeatTimes = 1;
  
  if(options.additionRepeatTimes == undefined) options.additionRepeatTimes = 1;

  for(let i = 1; i <= options.repeatTimes; i++){
    result = result + str;
    
    if(options.addition != undefined){
      for(let j = 1; j <= options.additionRepeatTimes; j++){

        result = result + options.addition;

        if(j < options.additionRepeatTimes){

          result = result + addSep;

        }
      }
    }

    if(i < options.repeatTimes){

      result = result + sep;

    }
    
  }
  
  return result;
};
  