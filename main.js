const TURN_OPTIONS = ["rock", "paper", "scissors"];

function getComputerChoice() {

    let choice = Math.floor(Math.random() * TURN_OPTIONS.length);
    choice = TURN_OPTIONS[choice];
    return choice;
}

