const attemptsLeftElement = document.getElementById("attempts");
const guessButton = document.getElementById("guessButton");
const resetButton = document.getElementById("resetButton");
const secretNumber = Math.floor(Math.random() * 100) + 1;
let attemptsLeft = 5;
attemptsLeftElement.textContent = attemptsLeft;

function resetGame(){
  const secretNumber = Math.floor(Math.random() * 100) + 1;
  attemptsLeft = 5;
  attemptsLeftElement.textContent = attemptsLeft;
  guessButton.style.display = "block";
  resetButton.style.display = "none";
  document.getElementById("guessInput").value = "";
  document.getElementById("result").textContent = "";
}

function checkGuess() {
  const userGuess = Number(document.getElementById("guessInput").value);
  const result = document.getElementById("result");

  if (!userGuess) {
    result.textContent = "Please enter a number!";
    return;
  }
  if (userGuess < 1 || userGuess > 100){
    result.textContent = "Please enter number between 1 to 100!";
    return;
  }

  if (userGuess === secretNumber) {
    console.log("Correct guess!");
    result.textContent = "🎉 Correct! You win!";
  } else if (userGuess > secretNumber) {
    console.log("Number too high!");
    result.textContent = "📉 Too high!";
    attemptsLeft--;
    attemptsLeftElement.textContent = attemptsLeft;
  } else {
    console.log("Number too low!");
    result.textContent = "📈 Too low!";
    attemptsLeft--;
    attemptsLeftElement.textContent = attemptsLeft;
  }

  if (attemptsLeft === 0 ){
    result.textContent = "😓 Game Over! The coreect number was " + secretNumber;
    guessButton.style.display = "none";
    guessButton.disabled = true;
    resetButton.style.display = "block";
  }
}