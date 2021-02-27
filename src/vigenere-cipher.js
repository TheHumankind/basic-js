const { replaceGetter } = require("sinon");
const CustomError = require("../extensions/custom-error");
alf = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

class VigenereCipheringMachine {

    mode = true;

    constructor(flag = true) {
      this.mode = flag;
    }
  
    encrypt(massage, key) {
    massage = massage.toUpperCase().split('');
    key = key.toUpperCase().split('');
    let newKey = [],
        newMassage = [],
        keyIndex = 0,
        i = 0;
    while(newKey.length < massage.length){
      if (massage[i] == ' ') {

        newKey.push(' ');
        keyIndex--;

      } else if(alf.indexOf(massage[i]) == -1){
            newKey.push(massage[i]);
            keyIndex--;      

      } else {

        newKey.push(key[keyIndex]);

      }

      i++;

      if(keyIndex == key.length - 1){
        keyIndex = 0;
      } else {
        keyIndex++;
      }
    
    }

    i = 0;

    while (i < newKey.length){
        if (newKey[i] == ' ') {
            newMassage.push(' ');
        } else if(alf.indexOf(newKey[i]) == -1){

            newMassage.push(newKey[i]); 

        } else if(alf.indexOf(massage[i]) + alf.indexOf(newKey[i]) <= alf.length - 1) {

            let indexLetter = alf.indexOf(massage[i]) + alf.indexOf(newKey[i]);

            newMassage.push(alf[indexLetter]);

        } else if(alf.indexOf(massage[i]) + alf.indexOf(newKey[i]) >= alf.length - 1) {

        let indexLetter = alf.indexOf(massage[i]) + alf.indexOf(newKey[i]) - 26;

            newMassage.push(alf[indexLetter]);
        }
        i++;      
  } 

    if (!this.mode) {
      newMassage.reverse();
    }

    return newMassage.join('');
  }    
  decrypt(massage, key) {

    massage = massage.toUpperCase().split('');
    key = key.toUpperCase().split('');
    let newKey = [],
        newMassage = [],
        keyIndex = 0,
        i = 0;
    while(newKey.length < massage.length){
      if (massage[i] == ' ') {

        newKey.push(' ');
        keyIndex--;

      } else if(alf.indexOf(massage[i]) == -1){
            newKey.push(massage[i]);
            keyIndex--;      

      } else {

        newKey.push(key[keyIndex]);

      }

      i++;

      if(keyIndex == key.length - 1){
        keyIndex = 0;
      } else {
        keyIndex++;
      }
    
    }

    i = 0;

    while (i < newKey.length){
      if (newKey[i] == ' ') {
          newMassage.push(' ');
      } else if(alf.indexOf(newKey[i]) == -1){
          newMassage.push(newKey[i]); 

      } else if(alf.indexOf(massage[i]) - alf.indexOf(newKey[i]) >= 0) {

          let indexLetter = alf.indexOf(massage[i]) - alf.indexOf(newKey[i]);

          newMassage.push(alf[indexLetter]);

      } else if(alf.indexOf(massage[i]) - alf.indexOf(newKey[i]) < 0) {

      let indexLetter = alf.indexOf(massage[i]) - alf.indexOf(newKey[i]) + 26;

          newMassage.push(alf[indexLetter]);
      }
      i++;      
    } 

    if (!this.mode) {
      newMassage.reverse();
    }

    return newMassage.join('');
  }
}

module.exports = VigenereCipheringMachine;
