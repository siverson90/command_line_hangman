var LetterCheck = require("./letter.js");

var CreateWord = function (array) {
  this.array = array;
  // this.answerArray = [];
  // this.hyphenArray = [];
  // randomly selected word from bank
  this.generateWord = function(){
   // selects value based on length of wordBank Array
    var selectRandomValue = Math.floor(Math.random() * this.array.length);
    // Takes the randomly generated value and selects word based on index position
    var secretWord = this.array[selectRandomValue];
    // Word is split by each character
    var splitString = secretWord.split("");
    // loop through length of word and push to answer array && hypenarray
    return splitString;
  }
}


module.exports = CreateWord