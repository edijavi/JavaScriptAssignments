function computerPlay() {
  var computerOptions = ["Rock", "Paper", "Scissors"];
  var computerSelection =
    computerOptions[Math.floor(Math.random() * computerOptions.length)];
  return computerSelection;
}

function playRound(playerSelection, computerSelection) {
  var result, playerScore=0, computerScore=0;
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    result = `Tie ${computerSelection} equal to ${playerSelection}`;
  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      result = `You Lose! ${computerSelection} beats ${playerSelection}`;
      computerScore+=1;
    } else {
        result = `You Win! ${playerSelection} beats ${computerSelection}`;
        playerScore+=1;
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
        result = `You Lose! ${computerSelection} beats ${playerSelection}`;
        computerScore+=1;
    } else {
        result = `You Win! ${playerSelection} beats ${computerSelection}`;
        playerScore+=1;
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
        result = `You Lose! ${computerSelection} beats ${playerSelection}`;
        computerScore+=1;
    } else {
        result = `You Win! ${playerSelection} beats ${computerSelection}`;
        playerScore+=1;
    }
  }
  console.log(result);
  console.log(playerScore, computerScore);
  return (playerScore, computerScore);
}
// const playerSelection = 'paper';
// const computerSelection = computerPlay();
// console.log(playerSelection, computerSelection);
// console.log(playRound(playerSelection, computerSelection));

function game() {
    let rounds = 5
    let computerResult = 0, playerResult = 0;
    
    for (let index = 0; index < rounds; index++) {
        var playerSelection = prompt("What's your selection?");
        var computerSelection = computerPlay();
        console.log(playerSelection, computerSelection);
        var gameResults = playRound(playerSelection, computerSelection);
        computerResult+=gameResults.computerScore;
        playerResult+=gameResults.playerScore
    }
    console.log(computerResult, playerResult);
}
game();


document.getElementById("app").innerHTML = `
<h1>Hello Team!</h1>
<div>
  This is my assigment
  <a href="https://github.com/edijavi/JavaScriptAssignments" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
