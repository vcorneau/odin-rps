function getComputerChoice() { //function returns a random integer between 0 and 2
    return Math.floor(Math.random()*3);
}

let result = getComputerChoice(); //Computer choice is equal to the result of getComputerChoice()

if (result === 0)  {
    console.log("Rock");
} else if (result === 1) {
    console.log("Paper");
} else if (result === 2) {
    console.log("Scisors");
}