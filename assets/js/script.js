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
        rock: { winsAgainst: ['scissors', 'lizard'], image: 'rock.png' },
        paper: { winsAgainst: ['rock', 'spock'], image: 'paper.png' },
        scissors: { winsAgainst: ['paper', 'lizard'], image: 'scissors.png' },
        lizard: { winsAgainst: ['spock', 'paper'], image: 'lizard.png' },
        spock: { winsAgainst: ['scissors', 'rock'], image: 'spock.png' },
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