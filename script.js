let randomNumber;
let computerChoice;

let humanChoice;


function getComputerChoice() {
  randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    computerChoice = "ROCK";
    return console.log(`Computer Picked: ${computerChoice}`);
  } else if (randomNumber === 2) {
    computerChoice = "PAPER";
    return console.log(`Computer Picked: ${computerChoice}`);
  } else {
    computerChoice = "SCISSORS";
    return console.log(`Computer Picked: ${computerChoice}`);
  }
}

function getHumanChoice() {
  humanChoice = prompt("Choose Rock, Paper, or Scissors:").toUpperCase();

  while (
    humanChoice !== "ROCK" &&
    humanChoice !== "PAPER" &&
    humanChoice !== "SCISSORS"
  ) {
    humanChoice = prompt(
      ` ${humanChoice} is not one of the options. Try Again... Choose Rock, Paper, or Scissors:`
    ).toUpperCase();
  }
  return console.log(`You Picked: ${humanChoice}`);
}



function playGame() {

  let computerScore = 0;
  let humanScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (
      (humanChoice === "ROCK" && computerChoice === "PAPER") ||
      (humanChoice === "PAPER" && computerChoice === "SCISSORS") ||
      (humanChoice === "SCISSORS" && computerChoice === "ROCK")
    ) {
      computerScore += 1;
      return console.log(
        `${computerChoice} beats ${humanChoice}. "Computer wins!!"`
      );
    }
  
    if (
      (humanChoice === "PAPER" && computerChoice === "ROCK") ||
      (humanChoice === "SCISSORS" && computerChoice === "PAPER") ||
      (humanChoice === "ROCK" && computerChoice === "SCISSORS")
    ) {
      humanScore += 1;
      return console.log(`${humanChoice} beats ${computerChoice}. Human wins!!`);
    } else {
      console.log("It was a draw!");
    }
  }

  for (let i = 1; i <= 5; i++) {
    getHumanChoice();
    getComputerChoice();
    playRound(computerChoice, humanChoice);
  }

  if (humanScore > computerScore) {
    return console.log(`Human won ${humanScore} rounds. Human wins!`);
  } else if (computerScore > humanScore) {
    return console.log(`Computer won ${computerScore} rounds. Computer wins!`);
  } else {
    return console.log("It's a draw!!");
  }
}

playGame();

