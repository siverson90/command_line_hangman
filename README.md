# command_line_hangman

User opens up command line and is shown a wordsphrase in hyphens

user inputs a letter

program checks if the user input is in the word object

if letter is in word, replace hyphen with letter, and Display CORRECT

if letter isn't in word display INCORRECT and remove count from guesses counter

Logic

Create-
Word consturter that generates a new word from a wordbank array

export the result of the randomwword generator

Create letter construter that takes in the word generated from the word bank and converts to "-", that will be rendered to string

The main.js will have the prompts and call on the functions, start game will invoke the random word generator which will need to invoke the word to hypens

Will need to have an array or some validation to check for userInput of a letter. When letter is guessed will need to push user guess to an array.

If user guess === indexOf word, show letter