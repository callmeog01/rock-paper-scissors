const   computerGameSelection   =   ['Rock',    'Paper',    'Scissors'];
let playerScore = 1;
let computerScore = 1;
function    computerPlay()  {
    return  computerGameSelection[Math.floor(Math.random()  *   computerGameSelection.length)];
}



function    playRound(playerSelection,  computerSelection)  {
    if(playerSelection  === 'rock') {
        playerScore++
        console.log("You won, rock beats scissors");
    }else if(playerSelection === 'paper') {
        console.log('It\'s a draw, nobody wins');
    }else if(playerSelection === 'scissors') {
        computerScore++
        console.log('You lose computer won');
    }else if (computerSelection === 'paper') {
        console.log('It\'s a draw, nobody wins')
    }else if(computerSelection === 'rock') {
        playerScore++
        console.log('Computer lose, rock beats scissors')
    }else if(computerSelection === 'scissors') {
        computerScore++
        console.log('Computer won, you lose')
    }else {
        ''
    }

}

const   playerSelection     =   prompt('Player turn');
const   computerSelection   =   computerPlay();

function    game()  {
    for(let i = 0; i < 5; i++)    {
        playRound(playerSelection,  computerSelection);
    }
    if(playerScore > computerScore) {
        alert('Congrats, you won the game')
    }else if(playerScore < computerScore) {
        alert('Sorry computer won')
    }else {
        alert('Its a draw')
    }
}
game()