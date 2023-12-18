function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch(choice) {
        case 0:
            return 'Rock';
            break;
        case 1:
            return 'Paper';
            break;
        case 2:
            return 'Scissors';
            break;
        default:
            break;
    }
}

let round, playerScore, computerScore = 0;

function playRound(playerSelection, computerSelection) {
    if(playerSelection == 'Rock' && computerSelection == 'Rock') {
        round -= 1;
        return 'Tie!'
        + 'Player Score: ' + playerScore
        + ' Computer Score: ' + computerScore;
    }
    if(playerSelection == 'Rock' && computerSelection == 'Paper') {
        computerScore += 1;
        return 'You Lose! Paper beats Rock'
        + 'Player Score: ' + playerScore
        + ' Computer Score: ' + computerScore;
    }
    if(playerSelection == 'Rock' && computerSelection == 'Scissors') {
        playerScore += 1;
        return 'You Win! Rock beats Scissors'
        + 'Player Score: ' + playerScore
        + ' Computer Score: ' + computerScore;
    }
    if(playerSelection == 'Paper' && computerSelection == 'Rock') {
        playerScore += 1;
        return 'You Win! Paper beats Rock'
        + 'Player Score: ' + playerScore
        + ' Computer Score: ' + computerScore;
    }
    if(playerSelection == 'Paper' && computerSelection == 'Paper') {
        round -= 1;
        return 'Tie! '
        + 'Player Score: ' + playerScore
        + ' Computer Score: ' + computerScore;
    }
    if(playerSelection == 'Paper' && computerSelection == 'Scissors') {
        computerScore += 1;
        return 'You Lose! Scissors beats Paper '
        + 'Player Score: ' + playerScore
        + ' Computer Score: ' + computerScore;
    }
    if(playerSelection == 'Scissors' && computerSelection == 'Rock') {
        computerScore += 1;
        return 'You Lose! Rock beats Scissors '
        + 'Player Score: ' + playerScore
        + ' Computer Score: ' + computerScore;
    }
    if(playerSelection == 'Scissors' && computerSelection == 'Paper') {
        playerScore += 1;
        return 'You Win! Scissors beats Paper ' 
        + 'Player Score: ' + playerScore
        + ' Computer Score: ' + computerScore;
    }
    if(playerSelection == 'Scissors' && computerSelection == 'Scissors') {
        round -= 1;
        return 'Tie! '
        + 'Player Score: ' + playerScore
        + ' Computer Score: ' + computerScore;
    }
}

function game() {
    for(round = 0; round < 5; round++) {
        playerSelection = prompt("Choose Rock, Paper, or Scissors");
        computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        //console.log('Player Score: ' + playerScore);
        //console.log('Computer Score: ' + computerScore);
    }
}