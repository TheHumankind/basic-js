const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {

  
  if (!Array.isArray(members)) {
    
    return false;

  }

  let secret = '';

  members.forEach(element => {
    
    if(typeof(element) == 'string') {

      if (element.includes(' ')) element = element.trim();
      secret = secret + element[0].toUpperCase();

    }
  });

  return secret.split('').sort().join('');
};
