//take user input
let playerSelection = "rock";
//covert input into lowercase letters
playerSelection == playerSelection.toLocaleLowerCase();
//check input's validity and call playRound if its valid
function validity(playerSelection) {
    switch (playerSelection) {
        case "rock":
            return playRound(playerSelection, computerChoice);

        case "paper":
            return playRound(playerSelection, computerChoice);
        
        case "scissors":
            return playRound(playerSelection, computerChoice);

        default:
            return "Invalid input! Try again."
    }
}

//computer's choice
const computerChoice = getComputerChoice();
//get a random choice for the computer from array "choices"
function getComputerChoice() {
    choices = ["rock","paper","scissors"];
    randomChoice = choices[Math.floor(Math.random()*choices.length)];
    return randomChoice;
}
//function for calling other functions for rounds
function playRound(playerSelection, computerChoice) {
    return compareChoices(playerSelection, computerChoice);
    
}
//function for comparing user's input and computer's choice
function compareChoices(playerSelection, computerChoice) {

    //when it's a draw
    if (playerSelection == "rock" && computerChoice == "rock") {
        return "It's a draw! Both drew Rock.";
    }
    else if (playerSelection == "paper" && computerChoice == "paper") {
        return "It's a draw! Both drew Paper.";
    }
    else if (playerSelection == "scissors" && computerChoice == "scissors") {
        return "It's a draw! Both drew Scissors.";
    }

    //when the player loses
    else if (playerSelection == "rock" && computerChoice == "paper") {
        return "You lost! Paper beats Rock.";
    }

    else if (playerSelection == "paper" && computerChoice == "scissors") {
        return "You lost! Scissors beats Paper.";
    }

    else if (playerSelection == "scissors" && computerChoice == "rock") {
        return "You lost! Rock beats Scissors.";
    }

    //when the player wins
    else if (playerSelection == "rock" && computerChoice == "scissors") {
        return "You won! Rock beats Scissors.";
    }

    else if (playerSelection == "paper" && computerChoice == "rock") {
        return "You won! Paper beats Rock.";
    }

    else if (playerSelection == "scissors" && computerChoice == "paper") {
        return "You won! Scissors beats Paper.";
    }
    else {
        return "invalid input!"
    }
}
//return the result
validity(playerSelection, computerChoice);
