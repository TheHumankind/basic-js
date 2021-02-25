const CustomError = require("../extensions/custom-error");

const chainMaker = {

  chainArr: [],

  getLength() {
    return this.chainArr.length;
  },
  addLink(value) {
    if (value !== undefined) {
        this.chainArr.push(value);
        return this;
    } else {
        this.chainArr.push('( )');
        return this;
    }
  },
  removeLink(position) {
   let newPosition = position - 1
   if (newPosition >= 0 && Number.isInteger(newPosition) && newPosition <= this.chainArr.length - 1){
       this.chainArr.splice(newPosition, 1);
       return this;
   } else {
       this.chainArr = [];
       throw new Error('Fatality');
   }

  },
  reverseChain() {
   this.chainArr.reverse();
   return this;
  },
  finishChain() {
    let resArr = this.chainArr.map(e => `( ${e} )`);
    this.chainArr = [];
    return resArr.join('~~');
  }
};

module.exports = chainMaker;
