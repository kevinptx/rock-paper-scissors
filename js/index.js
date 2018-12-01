//document.addEventListener("DOMContentLoaded", () => {

const rockDiv = document.querySelector("#rock");
const paperDiv = document.querySelector("#paper");
const scissorsDiv = document.querySelector("#scissors");
const userChoice = document.querySelector("#user-choice");
const computerChoice = document.querySelector("#computer-choice");
const result = document.getElementById("result");
const choiceArray = ["rock", "paper", "scissors"];
let random = "";
const playBtn = document.querySelector("#play-btn");
const gameContainer = document.querySelector(".container")
let playGame = false;

playBtn.addEventListener("click", () => {
  // hide & seek with the container div
  playGame = !playGame;
  if (playGame) {
    gameContainer.style.display = "block";
  } else {
    gameContainer.style.display = "none";
  }
});

function handleComputerChoice() {
  random = choiceArray[Math.floor(Math.random() * choiceArray.length)];
  computerChoice.innerHTML = random;
  computerString = computerChoice.textContent.replace(/^\w/, c =>
    c.toUpperCase()
  );
}


rockDiv.addEventListener("click", function () {
  userChoice.innerHTML = "rock";
  handleComputerChoice();
  let userString = userChoice.textContent.replace(/^\w/, c => c.toUpperCase());
  if (random == "rock") {
    result.innerHTML = `It's a tie! ${userString} equals ${computerString}.`;
  } else if (random == "paper") {
    result.innerHTML = `You Lose! ${computerString} beats ${userString}.`;
  } else if (random == "scissors") {
    result.innerHTML = `You Win! ${userString} beats ${computerString}.`;
  }
});

paperDiv.addEventListener("click", function () {
  userChoice.innerHTML = "paper";
  handleComputerChoice();
  let userString = userChoice.textContent.replace(/^\w/, c => c.toUpperCase());
  if (random == "paper") {
    result.innerHTML = `It's a tie! ${userString} equals ${computerString}.`;
  } else if (random == "rock") {
    result.innerHTML = `You Win! ${userString} beats ${computerString}.`;
  } else if (random == "scissors") {
    result.innerHTML = `You Lose! ${computerString} beats ${userString}.`;
  }
});

scissorsDiv.addEventListener("click", function () {
  userChoice.innerHTML = "scissors";
  handleComputerChoice();
  let userString = userChoice.textContent.replace(/^\w/, c => c.toUpperCase());
  if (random == "scissors") {
    result.innerHTML = `It's a tie! ${userString} equals ${computerString}.`;
  } else if (random == "paper") {
    result.innerHTML = `You Win! ${userString} beats ${computerString}.`;
  } else if (random == "rock") {
    result.innerHTML = `You Lose! ${computerString} beats ${userString}.`;
  }
});
//});