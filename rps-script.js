function getComputerChoice() { //function returns a random integer between 0 and 2
    return Math.floor(Math.random()*3);
}

/*if (computerSelection === 0)  {
    console.log("Rock");
} else if (computerSelection === 1) {
    console.log("Paper");
} else if (computerSelection === 2) {
    console.log("Scissors");
}*/



function playRound(){
   
    let computerSelection = getComputerChoice(); //Computer choice is equal to the result of getComputerChoice()
    let playerSelection = prompt("Type in Rock, Paper or Scissors:");
    let lowercaseSelection = playerSelection.toLowerCase();
    let playerInt;

    parseInt(lowercaseSelection);

    if (lowercaseSelection === "rock") {
        let playerInt = 0;
    } 
    else if (lowercaseSelection === "paper") {
        let playerInt = 1;
    }
    else if (lowercaseSelection === "scissors") {
        let playerInt = 2;
    }
    else {
        alert("You've entered an incorrect value. Please reload and try again.")
    }

    let result = ( playerInt - computerSelection );
    let winner

    if (result === 1 || -2 ) {
        return winner = "Player";
    }
    else if (result === -1 || 2 ) {
        return winner = "Computer";
    }
    else if (result === 0 ) {
        return winner = "Draw";
    }
}

console.log(playRound());