//Declare constant for the buttons on the page. 

const buttons = document.getElementsByClassName("button");

let buttonClicked = false;
let userSelection;
let playerInt;

let totalRounds = 0;
let playerScore = 0;
let cpuScore = 0;

let displayPlayerScore;
let displayCpuScore;

/*Where Rock is 0, Paper is 1 and Scissors is 2, 
and the player is on the X axis 
and CPU on the Y axis of the array. */

    
let winArray = [
    ["draw", "win", "lose"],
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
            totalRounds++;
            }

            if (userSelection == 'rockButton') {
                playerInt = 0;
                let userResult = document.getElementById('userResult').innerHTML= "You chose rock";
            }
            else if (userSelection == 'paperButton') {
                playerInt = 1;
                let userResult = document.getElementById('userResult').innerHTML= "You chose paper";
            }
            else if (userSelection == 'scissorsButton') {
                playerInt = 2;
                let userResult = document.getElementById('userResult').innerHTML= "You chose scissors";
            }

        if (computerSelection === 0)  {
            let cpuResult = document.getElementById('cpuResult').innerHTML= "Computer chose rock";
        } else if (computerSelection === 1) {
            let cpuResult = document.getElementById('cpuResult').innerHTML= "Computer chose paper";
        } else if (computerSelection === 2) {
            let cpuResult = document.getElementById('cpuResult').innerHTML= "Computer chose scissors";
        }

        //Win condition 
        let winner = (winArray[computerSelection][playerInt]);

        if (winner === "win")  {
            let roundResult = document.getElementById('roundResult').innerHTML= "You win!";
            playerScore++;
        } else if (winner === "lose") {
            let roundResult = document.getElementById('roundResult').innerHTML= "You lose.";
            cpuScore++;
        } else if (winner === "draw") {
            let roundResult = document.getElementById('roundResult').innerHTML= "It's a draw.";
        }

        console.log("Player Score: "+playerScore);
        console.log("CPU score: "+cpuScore);
        console.log("Total rounds: "+totalRounds);
    })
}