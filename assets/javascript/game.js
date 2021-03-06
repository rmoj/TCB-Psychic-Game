/*
PseudoCode:

1. initialize textboxes except wins and losses. 
2. set guessesleft to 10
3. Get guess
4. Decrement guessesleft by 1
5. Append guess to guessesSoFar string
6. if guess is incorrect then goto step 3 else...
7. if guess is correct increment wins by 1 then goto step 1
8. if guesses so far = 0 then step goto step 1

*/
'use strict';
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = '';
var randomLetter;
var arrLetter = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
// get random integer from 0 to max-1
function randomInt(max) {
  return Math.floor(Math.random() * max);
}

//set text value of html element
function setContent(elementId, value) {
  document.getElementById(elementId).textContent = value;
}

//initializes game variables
function initGame() {
  guessesLeft = 10;
  guessesSoFar = '';
  setContent('txtGuessesSoFar', '');
  setContent('txtGuessesLeft', '10');
  randomLetter = arrLetter[randomInt(26)];
}

//Use the CTRL key to view RNG letter and to check if randomizer is working properly
function cheat() {
  alert('Letter is: ' + randomLetter);
}

initGame();

document.onkeydown = function(e) {
  if (e.ctrlKey) {
    cheat();
  }
};

document.onkeyup = function(e) {
  if (e.ctrlKey) {
    cheat();
  }

  if (guessesLeft > 0) {
    guessesSoFar += e.key + ', ';
    setContent('txtGuessesSoFar', guessesSoFar);
    guessesLeft--;
    setContent('txtGuessesLeft', guessesLeft);
    if (randomLetter === e.key) {
      wins++;
      setContent('txtWins', wins);
      initGame();
    }

    // if user has no more guesses left, user loses and game is reset
    if (guessesLeft == 0) {
      initGame();
      losses++;
      setContent('txtLosses', losses);
    }
  }
};
