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
var guessesLeft = 9;
var guessesSoFar = '';

var userGuess = document.getElementById('txtGuessesSoFar');

// Next, we give JavaScript a function to execute when onkeyup event fires.
document.onkeyup = function(event) {
  guessesSoFar += event.key + ', ';
  userGuess.textContent = guessesSoFar;
};
