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



let winCounter = 0;
let lossCounter = 0;

function game() {
    const computerSelection = getComputerChoice();
        console.log(playRound(playerChoice, computerSelection));
}


const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playerChoice = button.className;
        game();
        winScore();
        lossScore();
        gameWinner();
    })
});


const container = document.querySelector('.container');
//Player Win Count
const win = document.createElement('div');
win.classList.add('win');
container.appendChild(win);

//Computer Loss Count
const loss = document.createElement('div');
loss.classList.add('loss');
container.appendChild(loss);


function winScore() {
    win.textContent = "Wins: " + winCounter;
}

function lossScore() {
    loss.textContent = "Loss: " + lossCounter;
}

function gameWinner() {
    if (winCounter == 5) {
        const gameWinner = document.createElement('div');
        gameWinner.textContent = "You have beat the computer!"
        container.appendChild(gameWinner);
    } else if (lossCounter == 5) {
        const gameWinner = document.createElement('div');
        gameWinner.textContent = "You have lost to the computer!"
        container.appendChild(gameWinner);
    }
}