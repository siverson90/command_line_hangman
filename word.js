var wordBank = ["beans", "kale", "pumpkin"];
var answerArray =[];

var CreateWord = function (word) {
  this.word = word;
  console.log(this.word);
  this.pushToAnswerArray = function () {
    for (var i = 0; i < this.word.length; i++) {
      answerArray.push(this.word[i]);
      console.log(answerArray);
    }
  }
  this. 
  pushToAnswerArray();
}


function pushToWordBank (array) {
  var selectedValue = Math.floor(Math.random() * array.length);
  var chosenWord = array[selectedValue];
  var splitString = chosenWord.split("");
  CreateWord(splitString);
}

pushToWordBank(wordBank);


module.exports= CreateWord