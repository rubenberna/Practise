/*
GAME FUNCTION
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

// Game values
let min = 1, 
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// UI elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener('mousedown', function(e){
  // if we listen to click, there's event delegation and the play again is immediately clicked, so we don't see the winning msg
  if(e.target.className === 'play-again'){
    window.location.reload();
  }
})

// Listen for guess
guessBtn.addEventListener('click', function() {
  let guess = parseInt(guessInput.value);

  // Validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red')
  }
  
  // Check if won
  if(guess === winningNum) {
    // Game over - won
    gameOver(true, `${winningNum} is correct, YOU WIN!`, 'green');

  } else {
    // Wrong number
    guessesLeft -= 1;

    if(guessesLeft === 0) {
      // Game over - lost
      gameOver(false, `Game over, you lost. The correct number was ${winningNum}`)

    } else {
      // Game continues - answer wrong
      guessInput.style.borderColor = 'red';
      guessInput.value = '';
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red')
    }

  }
});

// Set message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}

// Get Winning number
function getRandomNum(min, max) {
  // Math floor brings integers. random only decimal numbers, so we multiply by the difference between max and min plus the min
 return Math.floor(Math.random()*(max-min+1)+min);
}

function gameOver(won, msg) {
  let color;
  won === true ? color = 'green' : 'red';
    // Disable input
    guessInput.disabled = true;
    // Change border color
    guessInput.style.borderColor = color;
    // Set message
    setMessage(msg, color);
    // Play again?
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}