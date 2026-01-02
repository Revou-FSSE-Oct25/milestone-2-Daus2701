let score = 0;
let timeLeft = 10;
let timer = null;
let highScore = localStorage.getItem("clickerHighScore") || 0;

const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const highScoreEl = document.getElementById("highScore");
const statusEl = document.getElementById("gameStatus");
const clickButton = document.getElementById("clickButton");

highScoreEl.textContent = highScore;

function increaseScore() {
  if (timeLeft <= 0) return;

  if (!timer) startTimer();

  score++;
  scoreEl.textContent = score;
}

function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    timeEl.textContent = timeLeft;

    if (timeLeft === 0) {
      endGame();
    }
  }, 1000);
}

function endGame() {
  clearInterval(timer);
  timer = null;
  clickButton.disabled = true;

  if (score > highScore) {
    highScore = score;
    localStorage.setItem("clickerHighScore", highScore);
    highScoreEl.textContent = highScore;
    statusEl.textContent = "🏆 New High Score!";
  } else {
    statusEl.textContent = "⏰ Time's up!";
  }
}

function resetButton() {
  clearInterval(timer);
  timer = null;
  score = 0;
  timeLeft = 10;

  scoreEl.textContent = score;
  timeEl.textContent = timeLeft;
  statusEl.textContent = "";
  clickButton.disabled = false;
}