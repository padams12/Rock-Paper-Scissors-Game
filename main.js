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

function game() {

    let playerWins = [];
    let computerWins = [];

    for (let i = 0; i < 5; i ++) {

        let playerChoice = prompt("Choose rock, paper, or scissors: ");
        let result = playRound(playerChoice, getComputerChoice());
        console.log(result);
        result = result.toLowerCase();
        let winner = result[0];

        if (winner == "c" ) {

            computerWins.push(1);
        }
        
        else if (winner == "p") {

            playerWins.push(1);
        }

        else {

            computerWins.push(0);
            playerWins.push(0);

        }
 
    }

    let computerTotal = 0;
    let playerTotal = 0;

    let computerWinCount = computerWins.reduce(function (x,y) {
        return x + y;
    });

    let playerWinCount = playerWins.reduce(function (x,y) {
        return x + y;
    });

    if (playerWinCount > computerWinCount) {

        console.log(`Player wins the game! Player won ${playerWinCount} rounds and computer won ${computerWinCount} rounds.`);
        return
    }

    else if (playerWinCount < computerWinCount) {

        console.log(`Computer wins the game! Computer won ${computerWinCount} rounds and player won ${playerWinCount} rounds.`);
        return
    }

    else {

        console.log(`Tie game. Both player and computer each won ${playerWinCount} rounds.`);
        return
    }
}

