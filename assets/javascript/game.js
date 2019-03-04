window.onload = function () {
    // THE OVERALL STATUS OF THE GAME
    // this game kinda works, but it doesn't work 100%. Basically, you can win, but you cannot lose.
    // I know there's something about the double loops in my checkWord function that is preventing the lose counter from working.
    // However, I cannot get the game to even halfway work without them. Hence, I'm at an impasse.
    // I asked for help from many different people, but I still couldn't fix the game. But I prettied up the page for you TA's.


    //my global variables
    // the array of the different words
    var bigCats = ["tiger", "lion", "leopard", "jaguar", "panther", "bobcat", "cheetah", "lynx", "cougar", "caracal", "serval"];
    // a random number generator
    var randomNum = Math.floor((Math.random() * bigCats.length));
    // picks a random word from the array 
    var currentWord = bigCats[randomNum];
    // this is where the word will go
    var placeHolder = [];
    var userText = document.getElementById("guess-here");
    var userGuess = [];
    var lives;
    var guessesLeft = 9;
    var showLives = document.getElementById("guesses-left");
    var guessHere = document.getElementById("guess-here");


    // the wordPicker function displays the chosen word and one of the letters in the word in the console 
    function wordPicker() {
        console.log(currentWord);
        console.log(currentWord[3]);
    }
    wordPicker();

    //this function generates a number of _ based on the length of the chosen word.
    function answerArray() {
        for (var i = 0; i < currentWord.length; i++) {
            placeHolder.push(" _ ");
        }
        console.log(placeHolder);
        var screen = document.getElementById("placeholder");
        // got this from a cheat sheet https://gist.github.com/thegitfather/9c9f1a927cd57df14a59c268f118ce86#add-elements-to-the-dom
        var h1Text = document.createTextNode(placeHolder.join(""));
        screen.appendChild(h1Text);
    }
    answerArray();

    // this function updates the placeholders once the user has pressed a correct letter
    function pageUpdate() {
        var screen = document.getElementById("placeholder");
        screen.innerHTML = placeHolder.join("");
    }

    // this function is how the user's key presses are processed
    document.onkeyup = function (event) {
        console.log(event.key);
        userText.textContent = event.key;
        userGuess.push(event.key);
        console.log(userGuess);
        checkWord(userGuess);

    }

    // this is the main function and the one giving me problems. It loops too many times to be able to give a single integer for the win/lose condition, but I cannot get it to work without both loops
    function checkWord() {

        for (var i = 0; i < userGuess.length; i++) {

            for (var j = 0; j < currentWord.length; j++) {

                if (userGuess[i].indexOf(currentWord[j]) >= 0) {
                    console.log("Match!", userGuess[i], currentWord[j]);
                    placeHolder[j] = userGuess[i];
                    pageUpdate();
                    displayGuesses();
                    winGame();
                    console.log(placeHolder.join(""));
                }
                else {
                    console.log("no match");
                    displayGuesses();
                    livesDecrease();
                    winGame();
                    // this code doesn't work. It doesn't console log properly, and it does not decrease the number of lives.
                    // it does, however, correctly display the guesses you guess.
                }

            }

        }

    }
    // this function displays the correctly guessed letters in place of the _'s
    function displayGuesses() {
        guessHere.innerHTML = userGuess.join("");
    }
    //  this function displays how many lives you have
    function lives() {
        showLives.innerHTML = "You have " + guessesLeft + " lives";
    }
    lives();
    // this function should decrease the lives, but it does not work
    function livesDecrease() {
        guessesLeft--;
    }
    // this function lets you win, but you cannot lose.
    function winGame() {
        console.log("test " + (currentWord));
        console.log("test " + (placeHolder.join("")));
        if ((currentWord) === (placeHolder.join(""))) {
            console.log("you win!");
            showLives.innerHTML = ("You win!");
            // PSUEDOCODE
            // display button
            // if click on button, reset game by picking a new word and returning the placeholder to its original state

        }
        else {
            // if I put anything here, you lose right away
        }

    }



}




