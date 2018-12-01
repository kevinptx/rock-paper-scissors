const rockDiv = document.getElementById("rock");
const paperDiv = document.getElementById("paper");
const scissorsDiv = document.getElementById("scissors");
const userChoice = document.getElementById("user-choice");
const computerChoice = document.getElementById("computer-choice");
const result = document.getElementById("result");
const choiceArray = ["rock", "paper", "scissors"];
let random = "";

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