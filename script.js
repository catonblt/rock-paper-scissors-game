let randomNumber;
let humanChoice;
let computerChoice;
let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
  humanChoice = prompt("Choose Rock, Paper or Scissors").toUpperCase();
  while (
    humanChoice !== "ROCK" &&
    humanChoice !== "PAPER" &&
    humanChoice !== "SCISSORS"
  ) {
    humanChoice = prompt(
      "TRY AGAIN!! Choose Rock, Paper or Scissors"
    ).toUpperCase();
  }
  return humanChoice; //console.log(`Human Chose: ${humanChoice}`);
}

function getComputerChoice() {
  randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    computerChoice = "ROCK";
    return computerChoice; //console.log(`Computer Chose: ${computerChoice}`);
  } else if (randomNumber === 2) {
    computerChoice = "PAPER";
    return computerChoice; //console.log(`Computer Chose: ${computerChoice}`);
  } else if (randomNumber === 3) {
    computerChoice = "SCISSORS";
    return computerChoice; //console.log(`Computer Chose: ${computerChoice}`);
  }
}

function playRound(humanChoice, computerChoice) {
  getHumanChoice();
  getComputerChoice();
  if (humanChoice === computerChoice) {
    console.log(humanChoice);
    console.log(computerChoice);
    console.log("It's a draw!");
  } else if (
    (humanChoice === "ROCK" && computerChoice === "SCISSORS") ||
    (humanChoice === "SCISSORS" && computerChoice === "PAPER") ||
    (humanChoice === "PAPER" && computerChoice === "ROCK")
  ) {
    console.log(
      `Computer Chose: ${computerChoice} and Human Chose: ${humanChoice}. You WIN!!!!!!!`
    );
    humanScore += 1;
  } else if (
    (computerChoice === "ROCK" && humanChoice === "SCISSORS") ||
    (computerChoice === "SCISSORS" && humanChoice === "PAPER") ||
    (computerChoice === "PAPER" && computerChoice === "ROCK")
  ) {
    console.log(
      `Computer Chose: ${computerChoice} and Human Chose: ${humanChoice}. You LOSE!!!!!!!`
    );
    computerScore += 1;
  }
}

function playGame() {
for (let i = 1; i <= 5; i++) {
playRound(humanChoice,computerChoice);
}
if (humanChoice > computerChoice) {
  `Human won with a score of ${humanScore}.`
} else {
  `Computer won with a score of ${computerScore}`
}
}

playGame();