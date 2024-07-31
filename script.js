let randomNumber;
let playing = true;
let computerChoice;
let humanScore = 0;
let computerScore = 0;
let humanChoice;
let buttonClicked = false;
let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");

let HScore = document.querySelector(".H-Score");
let CScore = document.querySelector(".C-Score");

const buttons = document.querySelectorAll("button");

if (humanScore || computerScore < 5) {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      humanChoice = button.className;
      console.log(`Human Picked: ${humanChoice}`);
      getComputerChoice();
      playRound(humanChoice, computerChoice);
    });
  });
}

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

function playRound(humanChoice, computerChoice) {
  if (playing) {
    if (
      (humanChoice === "ROCK" && computerChoice === "PAPER") ||
      (humanChoice === "PAPER" && computerChoice === "SCISSORS") ||
      (humanChoice === "SCISSORS" && computerChoice === "ROCK")
    ) {
      computerScore += 1;
      CScore.textContent = "";
      CScore.textContent = `Computer Score: ${computerScore}`;

      let results = document.querySelector(".results");
      results.textContent = "";
      let content = document.createElement("div");
      content.classList.add("content");
      content.textContent = `${computerChoice} beats ${humanChoice}. Computer wins.`;
      results.appendChild(content);
    }

    if (
      (humanChoice === "PAPER" && computerChoice === "ROCK") ||
      (humanChoice === "SCISSORS" && computerChoice === "PAPER") ||
      (humanChoice === "ROCK" && computerChoice === "SCISSORS")
    ) {
      humanScore += 1;
      HScore.textContent = "";
      HScore.textContent = `Human Score: ${humanScore}`;

      let results = document.querySelector(".results");
      results.textContent = "";
      let content = document.createElement("div");
      content.classList.add("content");
      content.textContent = `${humanChoice} beats ${computerChoice}. Human wins.`;
      results.appendChild(content);
    } else if (humanChoice === computerChoice) {
      let results = document.querySelector(".results");
      results.textContent = "";
      let content = document.createElement("div");
      content.classList.add("content");
      content.textContent = `It's a draw.`;
      results.appendChild(content);
    }
  }
  if (computerScore === 5) {
    results = document.querySelector(".results");
    results.textContent += " ---Computer wins the Tournament!!";
    playing = false;
    computerScore += 1;
  }
  if (humanScore === 5) {
    results = document.querySelector(".results");
    results.textContent += " --- Human wins the Tournament!!";
    playing = false;
    humanScore += 1;
  }
}

