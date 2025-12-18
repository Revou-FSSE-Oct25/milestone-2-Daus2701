const secretNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
  const userGuess = Number(document.getElementById("guessInput").value);
  const result = document.getElementById("result");

  if (!userGuess) {
    result.textContent = "Please enter a number!";
    return;
  }

  if (userGuess === secretNumber) {
    console.log("Correct guess!");
    result.textContent = "🎉 Correct! You win!";
  } else if (userGuess > secretNumber) {
    console.log("Number too high!");
    result.textContent = "📉 Too high!";
  } else {
    console.log("Number too low!");
    result.textContent = "📈 Too low!";
  }
}