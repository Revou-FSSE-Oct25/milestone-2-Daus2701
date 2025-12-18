const secretNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
  const userGuess = Number(document.getElementById("guessInput").value);
  const result = document.getElementById("result");

  if (!userGuess) {
    result.textContent = "Please enter a number!";
    return;
  }

  if (userGuess === secretNumber) {
    result.textContent = "🎉 Correct! You win!";
  } else if (userGuess > secretNumber) {
    result.textContent = "📉 Too high!";
  } else {
    result.textContent = "📈 Too low!";
  }
}