//Declare constant for the buttons on the page. 

const buttons = document.getElementsByClassName("button");

let buttonClicked = false;
let userSelection;
let playerInt;

/*Where Rock is 0, Paper is 1 and Scissors is 2, 
and the player is on the X axis 
and CPU on the Y axis of the array. */

    
let winArray = [
    ["draw", "player", "lose"],
    ["lose", "draw", "win"],
    ["win", "lose", "draw"],
]

/*Computer generates a random number between 0 and 2*/
function getComputerChoice() { 
    return Math.floor(Math.random()*3);
}

for (let button of buttons) {
    button.addEventListener('click', function handleClick() {
        buttonClicked = true;
        
        let computerSelection = getComputerChoice();

        //Converts button clicked to corresponding integer
        if (buttonClicked = true) {
            userSelection = event.target.id;
            }

            if (userSelection == 'rockButton') {
                playerInt = 0;
                console.log("Player chose rock");
            }
            else if (userSelection == 'paperButton') {
                playerInt = 1;
                console.log("Player chose paper");
            }
            else if (userSelection == 'scissorsButton') {
                playerInt = 2;
                console.log("Player chose scissors");
            }

        if (computerSelection === 0)  {
            console.log("Computer chose rock");
        } else if (computerSelection === 1) {
            console.log("Computer chose paper");
        } else if (computerSelection === 2) {
            console.log("Computer chose scissors");
        }

        //Win condition 
        let winner = (winArray[computerSelection][playerInt]);

        if (winner === "win")  {
            console.log("Player wins!");
        } else if (winner === "lose") {
            console.log("Player loses.");
        } else if (winner === "draw") {
            console.log("It's a draw");}

    })
}

