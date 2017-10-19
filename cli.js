// Required files
var inquirer = require("inquirer");
var CreateWord = require("./word.js");
var NewLetter = require("./letter.js");

// Global Variables
var wordBank = [ "roasted red peppers", "butternut squash"];
var wordArray = [];

var guessesCounter = 9;
// keep score of letters guessed
var prevouslyGuessedArr= [];
var lengthOfGuesses= prevouslyGuessedArr.length;
// array of just letters for inital display
var initialDisplay = [];

var wins = 0;
var losses = 0;


function letterToArray () {
  var keyWord = new CreateWord(wordBank);
  var wordGenerator = keyWord.generateWord();

  for ( var i = 0 ; i < wordGenerator.length; i++) {
    var letterObj = new NewLetter(wordGenerator[i]);
    wordArray.push(letterObj);
    initialDisplay.push(letterObj.placeholder);
  }
};

welcome();

function welcome () {
  wordArray = [];
  guessesCounter = 9;
  prevouslyGuessedArr = [];
  initialDisplay = [];
  // if(wins > 0 || losses > 0) {
  //   console.log("Welcome back!")
  // } else {
  // console.log("Welcome to Commandline Hangman!!!!!")
  // }

  inquirer.prompt([
  {
    type:"input",
    message: "Would you like to play the game(y/n)?",
    name: "confirm"
  }
  ]).then(function(response) {

    if (response.confirm == "y"){
      letterToArray();
      playGame();
    }
    else {
      console.log("Thats okay, come back when you are ready");
    }
  })

}

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
        // console.log(prevouslyGuessedArr)

        // Iterate through each letter object comparing user guess and correct letter
        for ( var i = 0; i < wordArray.length; i++) {
            if (wordArray[i].letter === letterGuessed) {
            wordArray[i].guessed = true;
            // console.log(wordArray[i]);
            displayStr += wordArray[i].display();
          }
            else {
            // console.log(wordArray[i]);
            displayStr += wordArray[i].display();; 
          }
        }
        
        // Validate if there are still placeholders or if user has solved
        if (displayStr.includes("-") && (guessesCounter - lengthOfGuesses > 0)) {
          console.log ("You still have "+ guessesCounter+ " guesses");
          console.log(guessesCounter - lengthOfGuesses);
          console.log(displayStr);
          playGame();
        }
        else if(displayStr.includes("-") === false && (guessesCounter - lengthOfGuesses > 0)) {
          console.log("You win");
          wins++
          welcome();
        }
        else if(displayStr.includes("-") && (guessesCounter - prevouslyGuessedArr.length < 1)){
          console.log("You loose the game");
          losses--;
          welcome();
        }
         else {
          console.log("You win the game");
          wins++;
          welcome();
        }
    });
}

