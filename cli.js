var inquirer = require("inquirer");

// Input gates that check to see if word is guessed AND if the user has gueses left

// Need to have a counter of guesses
var userGuessesArray= [];

var guessesCounter = 9;

if (guessesCounter > 0) {

  function playGame () {
    inquirer.prompt([
    {
      type: "input",
      message : "Guess a letter",
      name : "letter",
    }]). then (function(letterGuessed) {
        console.log (letterGuessed.letter);
        userGuessesArray.push(letterGuessed.letter);
        console.log(userGuessesArray);
        playGame();
    })

  };
} else {
  console.log("Game Over")
  // would you like to play again? Add restart function
}

playGame()