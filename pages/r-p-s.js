const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

const statusEl = document.getElementById("status");
const playerScoreEl = document.getElementById("playerScore");
const computerScoreEl = document.getElementById("computerScore");
const buttons = document.querySelectorAll(".choices button");

function playGame(playerChoice) {
  disableButtons();
  statusEl.textContent = "🤔 Computer is choosing...";

  setTimeout(() => {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    const result = getResult(playerChoice, computerChoice);

    updateScore(result);
    statusEl.textContent = `You chose ${playerChoice}, computer chose ${computerChoice}. ${result}`;

    enableButtons();
  }, 700);
}

function getResult(player, computer) {
  if (player === computer) return "😐 It's a draw!";
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "🎉 You win!";
  }
  return "😢 You lose!";
}

function updateScore(result) {
  if (result.includes("win")) playerScore++;
  if (result.includes("lose")) computerScore++;

  playerScoreEl.textContent = playerScore;
  computerScoreEl.textContent = computerScore;
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  statusEl.textContent = "Make your move!";
  playerScoreEl.textContent = 0;
  computerScoreEl.textContent = 0;
}

function disableButtons() {
  buttons.forEach(btn => btn.disabled = true);
}

function enableButtons() {
  buttons.forEach(btn => btn.disabled = false);
}