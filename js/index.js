let rockDiv = document.getElementById("rock");
let paperDiv = document.getElementById("paper");
let scissorsDiv = document.getElementById("scissors");
let userChoice = document.getElementById("user-choice");
let computerChoice = document.getElementById("computer-choice");
let result = document.getElementById("result");
let choiceArray = ["rock", "paper", "scissors"];
let random = "";

function handleComputerChoice() {
  random = choiceArray[Math.floor(Math.random() * choiceArray.length)];
}

rockDiv.addEventListener("click", function() {
  userChoice.innerHTML = "rock";
  handleComputerChoice();
  computerChoice.innerHTML = random;
  let computerString = computerChoice.textContent.replace(/^\w/, c =>
    c.toUpperCase()
  );
  let userString = userChoice.textContent.replace(/^\w/, c => c.toUpperCase());
  if (random == "rock") {
    result.innerHTML = `It's a tie! ${userString} equals ${computerString}.`;
  } else if (random == "paper") {
    result.innerHTML = `You Lose! ${computerString} beats ${userString}.`;
  } else if (random == "scissors") {
    result.innerHTML = `You Win! ${userString} beats ${computerString}.`;
  }
});

paperDiv.addEventListener("click", function() {
  userChoice.innerHTML = "paper";
  handleComputerChoice();
  computerChoice.innerHTML = random;
  let computerString = computerChoice.textContent.replace(/^\w/, c =>
    c.toUpperCase()
  );
  let userString = userChoice.textContent.replace(/^\w/, c => c.toUpperCase());
  if (random == "paper") {
    result.innerHTML = `It's a tie! ${computerString} equals ${userString}.`;
  } else if (random == "rock") {
    result.innerHTML = `You Win! ${userString} beats ${computerString}.`;
  } else if (random == "scissors") {
    result.innerHTML = `You Lose! ${computerString} beats ${computerString}.`;
  }
});

scissorsDiv.addEventListener("click", function() {
  userChoice.innerHTML = "scissors";
  handleComputerChoice();
  computerChoice.innerHTML = random;
  let computerString = computerChoice.textContent.replace(/^\w/, c =>
    c.toUpperCase()
  );
  let userString = userChoice.textContent.replace(/^\w/, c => c.toUpperCase());
  if (random == "scissors") {
    result.innerHTML = `It's a tie! ${userString} equals ${computerString}.`;
  } else if (random == "paper") {
    result.innerHTML = `You Win! ${userString} beats ${computerString}.`;
  } else if (random == "rock") {
    result.innerHTML = `You Lose! ${computerString} beats ${userString}.`;
  }
});
