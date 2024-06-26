document.addEventListener("DOMContentLoaded", () => {
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const resultPara = document.getElementById('result-para');
    const playerImage = document.getElementById('player-image');
    const computerImage = document.getElementById('computer-image');
    const pScore = document.getElementById('pScore');
    const cScore = document.getElementById('cScore');
    const buttons = document.querySelectorAll('.button');
    const resetButton = document.getElementById('reset');
    const playerMoveImage = document.getElementById('player-image');
    const computerMoveImage = document.getElementById('computer-image');
    const maxRound = 20;
    let roundsPlayed = 0

    const rules = {
        rock: { winsAgainst: ['scissors', 'lizard'], image: 'rock.jpg' },
        paper: { winsAgainst: ['rock', 'spock'], image: 'paper.jpg' },
        scissors: { winsAgainst: ['paper', 'lizard'], image: 'scissors.jpg' },
        lizard: { winsAgainst: ['spock', 'paper'], image: 'lizard.jpg' },
        spock: { winsAgainst: ['scissors', 'rock'], image: 'spock.jpg' },
    };

    let playerScore = 0;
    let computerScore = 0;

    function getRandomChoice() {
        return choices[Math.floor(Math.random() * choices.length)];
    }

    function updateScore() {
        pScore.textContent = playerScore;
        cScore.textContent = computerScore;
    }

    function determineWinner(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            return "It's a tie!";
        } else if (rules[playerChoice].winsAgainst.includes(computerChoice)) {
            playerScore++;
            updateScore();
            return `You win! ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)} beats ${computerChoice}.`;
        } else {
            computerScore++;
            updateScore();
            return `You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${playerChoice}.`;
        }
    }

    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            const playerChoice = event.target.id;
            const computerChoice = getRandomChoice();
            playerMoveImage.src = `./assets/images/${playerChoice}.jpg`;
            playerMoveImage.alt = `${playerChoice}`;
           computerMoveImage.src = `./assets/images/${computerChoice}.jpg`;
            computerMoveImage.alt = `${computerChoice}`; 
            resultPara.textContent = determineWinner(playerChoice, computerChoice);
            roundsPlayed++;
            console.log(roundsPlayed)

            if(roundsPlayed === maxRound){
                playerScore = 0;
                computerScore = 0;
                roundsPlayed = 0
                updateScore();
                playerMoveImage.src = './assets/images/rock.jpg';
                computerMoveImage.src = './assets/images/rock.jpg';
                resultPara.textContent = 'Choose your move to start - First to 10 wins!';        
            };
        });
    });
    resetButton.addEventListener('click', () => {
        playerScore = 0;
        computerScore = 0;
        roundsPlayed = 0
        updateScore();
        playerMoveImage.src = './assets/images/rock.jpg';
        computerMoveImage.src = './assets/images/rock.jpg';
        resultPara.textContent = 'Choose your move to start - First to 10 wins!';
    });

        const text = `Team Bazinga Presents...`;
        const typingElement = document.getElementById('team-name');
        let index = 0;

        function type() {
            if (index < text.length) {
                typingElement.textContent += text.charAt(index);
                index++;
                setTimeout(type, 200);
            } else {
                setTimeout(() => {
                    typingElement.textContent = '';
                    index = 0;
                    type();
                }, 2000);
            }
        }
        type();
    

    
});