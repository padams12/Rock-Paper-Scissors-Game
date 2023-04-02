const TURN_OPTIONS = ["rock", "paper", "scissors"];

function getComputerChoice() {

    let choice = Math.floor(Math.random() * TURN_OPTIONS.length);
    choice = TURN_OPTIONS[choice];
    return choice;
}

function playRound(playerSelection, computerSelection) {

        playerSelection = playerSelection.toLowerCase();
        computerSelection = computerSelection.toLowerCase();
        
        if (playerSelection == "rock") {

            if (computerSelection == "paper") {

                let winner = `Computer wins! Player chose ${playerSelection} and computer beat it with ${computerSelection}.`;
                return winner;
            }

            else if (computerSelection == playerSelection) {

                let winner = `Tie game. Both computer and player chose ${playerSelection}.`;
                return winner;
            }

            else {

                let winner = `Player wins! Player chose ${playerSelection} and computer lost by choosing ${computerSelection}.`;
                return winner;
            }

        }

        if (playerSelection == "paper") {

            if (computerSelection == "scissors") {

                let winner = `Computer wins! Player chose ${playerSelection} and computer beat it with ${computerSelection}.`;
                return winner;
            }

            else if (computerSelection == playerSelection) {

                let winner = `Tie game. Both computer and player chose ${playerSelection}.`;
                return winner;
            }

            else {

                let winner = `Player wins! Player chose ${playerSelection} and computer lost by choosing ${computerSelection}.`;
                return winner;
            }

        }

        if (playerSelection == "scissors") {

            if (computerSelection == "rock") {

                let winner = `Computer wins! Player chose ${playerSelection} and computer beat it with ${computerSelection}.`;
                return winner;
            }

            else if (computerSelection == playerSelection) {

                let winner = `Tie game. Both computer and player chose ${playerSelection}.`;
                return winner;
            }

            else {

                let winner = `Player wins! Player chose ${playerSelection} and computer lost by choosing ${computerSelection}.`;
                return winner;
            }

        }
}

