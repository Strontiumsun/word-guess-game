window.onload = function () {

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

    // the wordPicker function displays the chosen word and one of the letters in the word in the console 
    function wordPicker() {
        console.log(currentWord);
        console.log(currentWord[3]);
    }
    //calling the wordPicker function
    wordPicker();

    //this function generates a number of _ based on the length of the chosen word.
    function answerArray() {
        for (var i = 0; i < currentWord.length; i++) {
            placeHolder.push(" _ ");
            // placeHolder[i] = " _ ";
        }
        console.log(placeHolder);
        var screen = document.getElementById("placeholder");
        // got this from a cheat sheet https://gist.github.com/thegitfather/9c9f1a927cd57df14a59c268f118ce86#add-elements-to-the-dom
        var h1Text = document.createTextNode(placeHolder.join(""));
        screen.appendChild(h1Text);

    }
    answerArray();

    function pageUpdate() {
        var screen = document.getElementById("placeholder");
        // var h1Text = document.createTextNode(placeHolder.join(""));
        screen.innerHTML = placeHolder.join("");
    }
    // got this from another site
    // comments = function () {
    //     showLives.innerHTML = "You have " + lives + " lives";
    //     if (lives < 1) {
    //         showLives.innerHTML = "Game Over";
    //     }
    //     for (var i = 0; i < geusses.length; i++) {
    //         if (counter + space === geusses.length) {
    //             showLives.innerHTML = "You Win!";
    //         }
    //     }
    // }

    document.onkeyup = function (event) {
        console.log(event.key);
        userText.textContent = event.key;
        userGuess.push(event.key);
        console.log(userGuess);
        livesDecrease();
        checkWord();


    }

    function checkWord() {
        for (var i = 0; i < userGuess.length; i++) {

            for (var j = 0; j < currentWord.length; j++) {

                if (userGuess[i].indexOf(currentWord[j]) >= 0) {
                    console.log("Match!", userGuess[i], currentWord[j]);
                    placeHolder[j] = userGuess[i];
                    pageUpdate();
                    displayGuesses();
                    winGame();
                }
                else {
                    console.log("no match");
                    displayGuesses();
                    winGame();
                }
            }
        }
    }

    //every time we guess, the guess is pushed into the array
    //at the end of check word we want to update the page
    // make a function that if you correctly guess or wrongly guess
    function displayGuesses() {
        var guessHere = document.getElementById("guess-here");
        guessHere.innerHTML = userGuess.join("");
    }

    function lives() {
        showLives.innerHTML = "You have " + guessesLeft + " lives";
    }
    lives();
    function livesDecrease() {
        guessesLeft = guessesLeft--;
    }

    function winGame() {
        if (guessesLeft < 1) {
            showLives.innerHTML = "Game Over";
        }
        for (var i = 0; i < currentWord.length; i++) {
            if (currentWord[i] === userGuess[i]) {
                showLives.innerHTML = "You Win!"
            }
        }
    }


    // comments = function () {
    //     showLives.innerHTML = "You have " + lives + " lives";
    //     if (lives < 1) {
    //         showLives.innerHTML = "Game Over";
    //     }
    //     for (var i = 0; i < currentWord.length; i++) {
    //         if (counter + space === currentWord.length) {
    //             showLives.innerHTML = "You Win!";
    //         }
    //     }
    // }










}