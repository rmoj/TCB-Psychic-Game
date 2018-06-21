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

function randomInt(max) {
  Math.floor(Math.random() * max + 1);
}

function initGame() {
  guessesLeft = 10;
  guessesSoFar = '';
  setContent('txtGuessesSoFar', '');
  setContent('txtGuessesLeft', '10');
  // randomLetter = arrLetter[randomInt(26)];
  randomLetter = 'q';
}

function randomInt(max) {
  Math.floor(Math.random() * max + 1);
}

function setContent(elementId, value) {
  document.getElementById(elementId).textContent = value;
}

initGame();

// Next, we give JavaScript a function to execute when onkeyup event fires.
document.onkeyup = function(e) {
  if (guessesLeft > 0) {
    guessesSoFar += e.key + ', ';
    // userGuess.textContent = guessesSoFar;
    document.getElementById('txtGuessesSoFar').textContent = guessesSoFar;
    setContent('txtGuessesSoFar', guessesSoFar);
    guessesLeft--;
    setContent('txtGuessesLeft', guessesLeft);
    if (randomLetter === e.key) {
      wins++;
      setContent('txtWins', wins);
      initGame();
    }
  } else {
    initGame();
    losses++;
    setContent('txtLosses', losses);
  }
};
