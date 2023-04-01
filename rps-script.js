/*Receive player's input and set it to lowercase*/
function getPlayerChoice() {
    let playerPrompt = prompt("Type in Rock, Paper or Scissors:").toLowerCase();
    let playerInt;

    if (playerPrompt === "rock") {
    playerInt = 0;
    } 
    else if (playerPrompt === "paper") {
    playerInt = 1;
    }
    else if (playerPrompt === "scissors") {
    playerInt = 2;
    }
    else {
    playerPrompt = prompt("Reload and try again").toLowerCase();
    }

    return playerInt;
}

/*Computer generates a random number between 0 and 2*/
function getComputerChoice() { 
    return Math.floor(Math.random()*3);
}

/*Plays one round of the game*/
function playRound(){

    let computerSelection = getComputerChoice();
    let playerSelection = getPlayerChoice();

    if (computerSelection === 0)  {
        console.log("Computer chose rock");
    } else if (computerSelection === 1) {
        console.log("Computer chose paper");
    } else if (computerSelection === 2) {
        console.log("Computer chose scissors");
    }

    if (playerSelection === 0)  {
        console.log("Player chose rock");
    } else if (playerSelection === 1) {
        console.log("Player chose paper");
    } else if (playerSelection === 2) {
        console.log("Player chose scissors");
    }

    /*Where Rock is 0, Paper is 1 and Scissors is 2, 
    and the player is on the X axis 
    and CPU on the Y axis of the array. */

    
    var winArray = [
        ["draw", "win", "lose"],
        ["lose", "draw", "win"],
        ["win", "lose", "draw"],
    ]

    let winner = (winArray[computerSelection][playerSelection]);

    return winner;

}

let firstRound = playRound();

if (firstRound === "win")  {
    console.log("Player wins!");
} else if (firstRound === "lose") {
    console.log("Player loses.");
} else if (firstRound === "draw") {
    console.log("It's a draw");
}
