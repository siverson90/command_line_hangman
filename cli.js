var inquirer = require("inquirer");
var CreateWord = require("./word.js");
var NewLetter = require("./letter.js");

var wordBank = ["beans", "kale", "pumpkin"];
var wordArray = [];

var userGuessesArray= [];
var guessesCounter = 9;
var keyWord = new CreateWord(wordBank);
var generator = keyWord.generateWord();

function letterToArray () {
  for ( var i = 0 ; i < generator.length; i++) {
    var letterObj = new NewLetter(generator[i]);
    wordArray.push(letterObj);
  }
};

letterToArray();

function playGame () {
    
    inquirer.prompt([
    {
      type: "input",
      message : "Guess a letter",
      name : "letter",
    }]). then (function(userGuess) {

      var letterGuessed = userGuess.letter;
      var displayStr= "";

      for ( var i = 0; i < wordArray.length; i++) {
          if (wordArray[i].letter === letterGuessed) {
          wordArray[i].guessed = true;
          console.log(wordArray[i]);
          displayStr += wordArray[i].display();
        }
          else {
          console.log(wordArray[i]);
          displayStr += wordArray[i].display();
          guessesCounter= guessesCounter - 1
        }
      }
      console.log("Word to Guess");
      
      if (displayStr.includes("-")) {
        console.log ("You still have "+ guessesCounter+ " guesses");
        console.log(displayStr);
        playGame();
      } else {
        console.log("You win the game");
      }
      
      
    //   if(displayStr.includes("-") = (true) && (guessesCounter > 1)) {
    //     playGame()
    //   }
    //   else if(displayStr.includes("-") = (true) && (guessesCounter < 1)) {
    //     console.log("Game Over")
    //   }
    });
}

playGame();

