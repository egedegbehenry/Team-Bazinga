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

    