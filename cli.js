var inquirer = require("inquirer");
var CreateWord = require("./word.js");
var NewLetter = require("./letter.js");

var wordBank = ["beans", "kale", "pumpkin"];
var wordArray = [];

var guessesCounter = 9;
// keep score of letters guessed
var prevouslyGuessedArr= [];
// array of just letters for inital display
var initialDisplay = [];

var keyWord = new CreateWord(wordBank);
var generator = keyWord.generateWord();

function letterToArray () {
  for ( var i = 0 ; i < generator.length; i++) {
    var letterObj = new NewLetter(generator[i]);
    wordArray.push(letterObj);
    initialDisplay.push(letterObj.placeholder);
  }
};

letterToArray();

console.log(initialDisplay.join());
// console.log(initalString);

function playGame () {

    inquirer.prompt([
      {
        type: "input",
        message : "Guess a letter",
        name : "letter",
      }]). then (function(userGuess) {

        var letterGuessed = userGuess.letter;
        var displayStr= "";
        guessesCounter--;
        prevouslyGuessedArr.push(letterGuessed);
        console.log(prevouslyGuessedArr)

        // Iterate through each letter object comparing user guess and correct letter
        for ( var i = 0; i < wordArray.length; i++) {
            if (wordArray[i].letter === letterGuessed) {
            wordArray[i].guessed = true;
            console.log(wordArray[i]);
            displayStr += wordArray[i].display();
          }
            else {
            console.log(wordArray[i]);
            displayStr += wordArray[i].display();; 
          }
        }
        console.log("Word to Guess");
        console.log(prevouslyGuessedArr.length);

        
        // Validate if there are still placeholders or if user has solved
        if (displayStr.includes("-") && (guessesCounter - prevouslyGuessedArr.length > 1)) {
          console.log ("You still have "+ guessesCounter+ " guesses");
          console.log(guessesCounter - prevouslyGuessedArr.length);
          console.log(displayStr);
          playGame();
        }
        else if(displayStr.includes("-") && (guessesCounter - prevouslyGuessedArr.length < 1)){
          console.log("You loose the game");
        }
         else {
          console.log("You win the game");
        }
    });
}

playGame();

