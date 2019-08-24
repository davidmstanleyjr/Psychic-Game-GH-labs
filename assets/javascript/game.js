var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 9;



var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guesses-left-text");
var guessesSoFarText = document.getElementById("guesses-so-far");
var computerGuess = computerChoices[Math.floor((Math.random() * 25))];
var guessesSoFar = [];

document.onkeyup = function (event) {

    guessesSoFar.push(event.key)

    guessesLeft -= 1;

    if(guessesLeft === 0 ) {
        guessesSoFar = [];
        guessesLeft = 9;
        if(event.key !== computerGuess) {
            losses++; 
            computerGuess = computerChoices[Math.floor((Math.random() * 25))];
        }
    }

    if(event.key === computerGuess) {
     wins++; guessesLeft = 9; 
     guessesSoFar = [];
     computerGuess = computerChoices[Math.floor((Math.random() * 25))];
    }

    
    guessesSoFarText.innerHTML = "guesses so far:" + guessesSoFar;
    guessesLeftText.innerHTML = "guesses left:" + guessesLeft;


    winsText.innerHTML = "wins: " + wins;
    lossesText.textContent = "losses: " + losses;

}



