const CustomError = require("../extensions/custom-error");

module.exports = function countCats(mat) {
  if(!mat || mat.length == 0) {
    return 0;
  }
  let count = 0;
  for (let i in mat){
    for(let j in mat[i]){
      if (mat[i][j] == '^^') count++;
    }
  }  
  return count;
};
