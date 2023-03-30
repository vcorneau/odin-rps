function getComputerChoice() {
    return Math.random()*2;
}

let computerChoice = getComputerChoice();

if (computerChoice = 0)  {
    console.log("Rock");
} else if (computerChoice = 1) {
    console.log("Paper");
} else if (computerChoice = 2) {
    console.log("Scisors");
}