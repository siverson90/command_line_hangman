var NewLetter = function (letter) {
  this.letter = letter;
  this.guessed = false;
  this.placeholder = "-"
  this.display = function () {
    if (this.guessed === false) {
      return this.placeholder;
    } else {
      return this.letter
    }
  }
}

module.exports = NewLetter

