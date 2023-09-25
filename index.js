const computerResults = document.querySelector("#computer-results");
const myResults = document.querySelector("#my-results");

function getComputersChoice() {
  let number = Math.ceil(Math.random() * 3);
  if (number === 1) return "rock";
  if (number === 2) return "paper";
  if (number === 3) return "scissors";
}

function playRockPaperScissors() {
  const computersChoice = getComputersChoice();
  const playersChoice = "rock";
  let answer = checkWinner(playersChoice, computersChoice);
  return answer;
}

function checkWinner(playersChoice, computersChoice) {
  playersChoice = playersChoice.toLowerCase();
  computersChoice = computersChoice.toLowerCase();
  winnersCount = 0;

  if (playersChoice === computersChoice) {
    return "draw";
  }
  if (
    (playersChoice === "rock" && computersChoice === "paper") ||
    (playersChoice === "paper" && computersChoice === "rock") ||
    (playersChoice === "scissors" && computersChoice === "paper")
  ) {
    winnersCount++;
    return "You Win";
  } else {
    return "You lose";
  }
}

function playMultipleTime(num) {
  let personWin = 0;
  for (let i = 0; i < num; i++) {
    playRockPaperScissors();
    if (playRockPaperScissors() === "You Win") personWin++;
  }
  return console.log(personWin);
}
