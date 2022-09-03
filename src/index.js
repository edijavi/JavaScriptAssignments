function computerPlay() {
  var computerOptions = ["Rock", "Paper", "Scissors"];
  var computerSelection =
    computerOptions[Math.floor(Math.random() * computerOptions.length)];
  return computerSelection;
}
var playerScore=0, computerScore=0;
function playRound(playerSelection, computerSelection) {
  let result;
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
  console.log(`Current Result: You: ${playerScore}, Computer${computerScore}`);
}
// const playerSelection = 'paper';
// const computerSelection = computerPlay();
// console.log(playerSelection, computerSelection);
// console.log(playRound(playerSelection, computerSelection));

function game() {
    let rounds = 5;
    for (let index = 0; index < rounds; index++) {
        var playerSelection = prompt("What's your selection?");
        var computerSelection = computerPlay();
        playerSelection = playerSelection.toLowerCase();
        computerSelection = computerSelection.toLowerCase();
        if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
            alert("Invalid input"), index--
          } else{
            console.log(`You: ${playerSelection}, Computer: ${computerSelection}`);
            playRound(playerSelection, computerSelection);
          }
        
    }
    if (playerScore > computerScore) {
        console.log(`Winner!!! You Rocket ${playerScore}-${computerScore}`);
    }else{
        console.log(`Computer kick your ass! ${computerScore}-${playerScore}`);
    }
}
game();


document.getElementById("app").innerHTML = `
<h1>Hello Team!</h1>
<div>
  This is my assigment
  <a href="https://github.com/edijavi/JavaScriptAssignments" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
