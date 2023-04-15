//get a random choice for the computer from array "choices"
function getComputerChoice() {
    choices = ["rock","paper","scissors"];
    randomChoice = choices[Math.floor(Math.random()*choices.length)];
    return randomChoice;
};

//accessing button elements from document to change text
window.addEventListener('click', (e) => {
    let x = e.target.id;
    wonLostStatement(x, getComputerChoice());
    document.getElementById('playerScore').innerHTML = playerNetScore;
    updateValue(playerNetScore, computerNetScore);
    checkScores(playerNetScore,computerNetScore);
    //reset all the stuff when reset button is clicked
    if(x == "reset-button") {
        playerNetScore = 0;
        computerNetScore = 0;
        document.getElementById('playerScore').innerHTML = playerNetScore;
        document.getElementById('computerScore').innerHTML = computerNetScore;
        document.getElementById('wonLoseStatement').innerHTML = "";
        document.getElementById("final-winner").innerHTML = "";
        
    }
}); 

//function for calling other functions for rounds
let playRound = (playerSelection, computerChoice) => compareChoices(playerSelection,computerChoice);

//function for comparing user's input and computer's choice
function compareChoices(playerSelection, computerChoice) {
    //stop scores from exceeding 5
    if (playerNetScore < 5 && computerNetScore < 5) {
        //when it's a draw
        if (playerSelection == "rock" &&            computerChoice == "rock") return "It's a draw! Both drew Rock.";
        if (playerSelection == "paper" && computerChoice == "paper") return "It's a draw! Both drew Paper.";
        if (playerSelection == "scissors" && computerChoice == "scissors") return "It's a draw! Both drew Scissors.";

        //when the player loses
        if (playerSelection == "rock" && computerChoice == "paper") {
            computerNetScore++;
            return "You lost! Paper beats Rock.";
    }

        if (playerSelection == "paper" && computerChoice == "scissors") {
            computerNetScore++;
            return "You lost! Scissors beats Paper.";
    }

        if (playerSelection == "scissors" && computerChoice == "rock") {
            computerNetScore++;
            return "You lost! Rock beats Scissors.";
    }

        //when the player wins
        if (playerSelection == "rock" && computerChoice == "scissors") {
            playerNetScore++;
            return "You won! Rock beats Scissors.";
    }

        if (playerSelection == "paper" && computerChoice == "rock") {
            playerNetScore++;
            return "You won! Paper beats Rock.";
    }

        if (playerSelection == "scissors" && computerChoice == "paper") {
            playerNetScore++;
            return "You won! Scissors beats Paper.";
    }
        else return "";
    }
};


//function for changing current result 
function wonLostStatement(playerSelection, computerChoice) {
    const currentResult = document.getElementById("wonLoseStatement");
    currentResult.innerHTML = playRound(playerSelection, computerChoice);
};

//for changing current scores
let computerNetScore = 0;
let playerNetScore = 0;

//updates scores each time the buttons are clicked
function updateValue(playerNetScore, computerNetScore) {
    document.getElementById('playerScore').innerHTML = playerNetScore;
    document.getElementById('computerScore').innerHTML = computerNetScore;
};

//checks when the one of the scores or both == 5
//And declares the final winner
function checkScores(playerNetScore,computerNetScore) {
    //access the final-winner element to change it
    let winner = document.getElementById("final-winner");
    //when player wins
    if (playerNetScore == 5 && computerNetScore < 5) winner.textContent = "Congratulations, you won!";
    //when player loses
    if (playerNetScore < 5 && computerNetScore == 5) winner.textContent = "Oh no, you lost!";
    //when it's a draw
    if (playerNetScore == 5 && computerNetScore == 5) winner.textContent = "It's a draw!";
}
