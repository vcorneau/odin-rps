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
    let playerSelection = getComputerChoice(); //Temporarily deactivated to not have to input with every reload.

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
        ["draw", "player", "lose"],
        ["lose", "draw", "win"],
        ["win", "lose", "draw"],
    ]

    let winner = (winArray[computerSelection][playerSelection]);

    if (winner === "win")  {
    console.log("Player wins!");
    } else if (winner === "lose") {
    console.log("Player loses.");
    } else if (winner === "draw") {
    console.log("It's a draw");}
    
    return winner;
}


function game() {
    let totalRounds = 0;
    let playerScore = 0;
    let cpuScore = 0;

    do {
        let currentRound = playRound();
        if (currentRound === "win") {
            playerScore++;
        }
        else if (currentRound === "lose") {
            cpuScore++;
        }

        totalRounds++;
        console.log("Total rounds: " +totalRounds);
        console.log("Score:"+ " Player " + playerScore + " // "  + "Computer " + cpuScore);
    }
    while (totalRounds < 5) 

    if (playerScore > cpuScore) {
        console.log("That was the last round. Player wins!")
    }
    else if (playerScore < cpuScore) {
        console.log("That was the last round. CPU wins!")
    }
    else if (playerScore === cpuScore) {
        console.log("That was the last round. It's a draw!")
    }

    }

console.log(game());


