//Declare constant for the buttons on the page. 

const buttons = document.getElementsByClassName("button");

let buttonClicked = false;

let userSelection;

for (let button of buttons) {
    button.addEventListener('click', function handleClick() {
        console.log('a button was clicked');
        buttonClicked = true;
        if (buttonClicked = true) {
            userSelection = event.target.id;
            }
            console.log(userSelection);
        }
    )
}



/*function buttonPressed(e) {
    console.log(e.target.id); // Get ID of Clicked Element

    return e.target.id;
}*/

//Create event listener for button clicks
/*for (let button of buttons) {
  button.addEventListener("click", buttonPressed); 
}*/

//Get player selection via button clicks

