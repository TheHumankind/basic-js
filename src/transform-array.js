const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let newArr = [],
      result = [];
  if (!Array.isArray(arr)){
    throw Error('Not Array');
  }

  for(let i = 0; i <= arr.length - 1; i++){
    if (i === 0)
      if (arr[i] == '--discard-prev' || arr[i] == '--double-prev')
        continue;

    if (i === arr.length - 1)
        if (arr[i] == '--discard-next' || arr[i] == '--double-next')
          continue;

    newArr.push(arr[i]);

  }

  for(let i = 0; i <= newArr.length - 1; i++){
    
    if (newArr[i] == '--discard-next') {
      newArr.splice(i, 1, ' ');
      newArr.splice(i + 1, 1, ' ');
      continue;
    }
    if (newArr[i] == '--double-prev') {
        newArr.splice(i, 1, newArr[i - 1]);
      continue;
    }

    if (newArr[i] == '--discard-prev') {
      newArr.splice(i, 1, ' ');
      newArr.splice(i - 1, 1, ' ');
      continue;
    }

    if (newArr[i] == '--double-next') {
      newArr.splice(i, 1, newArr[i + 1]);
    continue;
    }
  }

  for(let i = 0; i <= newArr.length - 1; i++){
    if(newArr[i] === ' '){
      newArr.splice(i, 1);
      i--;
    }
  }

  return newArr;

};