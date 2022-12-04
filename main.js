function getComputerChoice(){
    let num = Math.floor(Math.random() * 3) + 1;
    if (num == 1) {
        return "rock"
    } else if (num == 2) {
        return "scissor"
    } else {
        return "paper"
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper") {
        lossCounter++;
        return "You Lose! Paper beats Rock."
    } else if (playerSelection == "rock" && computerSelection == "scissor") {
        winCounter++;
        return "You Win! Rock beats Paper."
    } else if (playerSelection == "scissor" && computerSelection == "paper") {
        winCounter++;
        return "You Win! Scissor beats Paper."
    } else if (playerSelection == "scissor" && computerSelection == "rock") {
        lossCounter++;
        return "You Lose! Rock beats Scissor."
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        winCounter++
        return "You Win! Paper beats rock." 
    } else if (playerSelection == "paper" && computerSelection == "scissor") {
        lossCounter++;
        return "You Lose! Scissor beats Paper."
    } else if (playerSelection == computerSelection) {
        return "Tie!"
    }
}

function playerChoice(){
    let choice = prompt("Rock, Paper, or Scissor?");
    choiceInLower = choice.toLowerCase();
    return choiceInLower;

}

function gameWinner() {
    if (winCounter == lossCounter) {
        console.log("Draw.")
    } else if (winCounter > lossCounter) {
        console.log("You beat the computer.")
    } else {
        console.log("You lost to the computer.")
    }
}


let winCounter = 0;
let lossCounter = 0;

function game() {
    for (let i = 0; i < 5; i++) {

    const computerSelection = getComputerChoice();
    const playerSelection = playerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
    gameWinner()
}

game()