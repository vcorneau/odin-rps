//Declare constant for the buttons on the page. 

const buttons = document.getElementsByClassName("button");

let buttonClicked = false;
let userSelection;
let playerInt;

/*Computer generates a random number between 0 and 2*/
function getComputerChoice() { 
    return Math.floor(Math.random()*3);
}

for (let button of buttons) {
    button.addEventListener('click', function handleClick() {
        console.log('a button was clicked');
        buttonClicked = true;
        
        if (buttonClicked = true) {
            userSelection = event.target.id;
            }
            console.log(userSelection);

            if (userSelection == 'rockButton') {
                playerInt = 0;
            }
            else if (userSelection == 'paperButton') {
                playerInt = 1;
            }
            else if (userSelection == 'scissorsButton') {
                playerInt = 2;
            }
            console.log(playerInt);
        }
    )
}

