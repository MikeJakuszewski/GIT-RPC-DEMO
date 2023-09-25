const computerResults = document.querySelector("#computer-results");
const myResults = document.querySelector("#my-results");
const pickedRock = document.querySelector("#rock");
const pickedPaper = document.querySelector("#paper");
const pickedScissors = document.querySelector("#scissors");
const displayWinner = document.querySelector("#computer-results");
const humanScore = document.querySelector("#human");
const robotScore = document.querySelector("#robot");
const winner = document.querySelector("#winner");

function getComputersChoice() {
  let number = Math.ceil(Math.random() * 3);
  if (number === 1) return "rock";
  if (number === 2) return "paper";
  if (number === 3) return "scissors";
}
let counterHuman = 0;
let counterRobot = 0;

function playRockPaperScissors(option) {
  if (counterHuman === 5 || counterRobot === 5) {
    pickedRock.disabled = true;
    pickedPaper.disabled = true;
    pickedScissors.disabled = true;
    return;
  }
  const computersChoice = getComputersChoice();
  const playersChoice = option.target.id;
  let answer = checkWinner(playersChoice, computersChoice);
  if (answer === "You Win") counterHuman++;
  if (answer === "You Lose") counterRobot++;
  displayWinner.textContent = answer;
  humanScore.textContent = counterHuman;
  robotScore.textContent = counterRobot;

  if (counterHuman === 5) {
    winner.textContent = "Humans are the winners";
    displayWinner.textContent = "";
  } else if (counterRobot === 5) {
    winner.textContent = "Robots are the winners";
    displayWinner.textContent = "";
  }
}

function checkWinner(playersChoice, computersChoice) {
  playersChoice = playersChoice.toLowerCase();
  computersChoice = computersChoice.toLowerCase();

  if (playersChoice === computersChoice) {
    return "draw";
  }
  if (
    (playersChoice === "rock" && computersChoice === "paper") ||
    (playersChoice === "paper" && computersChoice === "rock") ||
    (playersChoice === "scissors" && computersChoice === "paper")
  ) {
    return "You Win";
  } else {
    return "You Lose";
  }
}

// function playMultipleTime(num) {
//   let personWin = 0;
//   for (let i = 0; i < num; i++) {
//     playRockPaperScissors();
//     if (playRockPaperScissors() === "You Win") personWin++;
//   }
//   return console.log(personWin);
// }

pickedRock.addEventListener("click", playRockPaperScissors);
pickedPaper.addEventListener("click", playRockPaperScissors);
pickedScissors.addEventListener("click", playRockPaperScissors);
