const choices = ["rock", "paper", "scissors"];

function play(userChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  const result = document.getElementById("rpsResult");

  if (userChoice === computerChoice) {
    result.textContent = `🤝 Draw! Both chose ${userChoice}`;
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    result.textContent = `🎉 You win! ${userChoice} beats ${computerChoice}`;
  } else {
    result.textContent = `😢 You lose! ${computerChoice} beats ${userChoice}`;
  }
}