Hangman word-guess game

1.	Start game with event handler
2.	It’s a hangman game so at the beginning:
    a.	You have a string of blank spaces making a word 
        i.	The computer must choose the word before you start 
    b.	You have a number of guesses that starts off at the highest number
        i.	If you guess a letter, and guess it again, it isn’t counted
    c.	The letters already guessed starts off blank
3.	Press a key to begin the game
4.	Once game has begun, press a letter to guess it
    a.	If the letter is correct, it shows up in the proper place in the blank spaces
    b.	If the letter is incorrect, it does not show up
    c.	Either way
        i.	The counter goes down
        ii.	The letter guessed is displayed
5.	If the player guesses all the letters, they win
6.	If they cannot guess the word before the number of guesses is expired, they lose.
7.	The game once won or lost must offer up a new word without the user needing to refresh the page.

Functions:

1. The bank of words
        should this word bank be in an object or an array?
            > maybe an array since we want all the words to be equal so the computer can pick any of them
            and start the game
        This bank of words must not repeat itself
            >> How do we create an array that exausts each item after use?
2. The user's key presses
        When the user presses a key, it needs to be checked against the current word in the game
        all the key presses equal the letter that is being pressed
            > pressing a non-letter key should not work
                >> How do you listen for just alphabet keys?
        The user's key presses should be saved
            > I think they should be saved in an array
                >> How to save user imput into an array for that session?
3. Comparing the word against the user's key presses
        If the user presses a key that is in the word, then it is good
            >it should show up in the word.
                >> How do you get the letters to be hidden at the start?
        ----- the Joan of Arc assignment from Day 3 of this week could be helpful for writing a function that checks for letters
        If a user presses a key that doesn't correlate to a letter in the word, that is bad
            > it won't show up in the word
4. Counter
        A counter for how many turns the user has should always be displayed
            >If the user runs out of turns, then the game is lost
            ---- I think getting the counter to go down is more important as a first step
            >If the user presses a key they already guessed, it shouldn't count.
                >> How do you do that?
5. Game refreshes
        When the game is won or lost, it must refresh on its own, and offer up a new word.
            >> How do you get the JS to refresh without refreshing the page?
        
    
