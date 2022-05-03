let game = {
    score: 0,
    currentGame: [],
    playerMoves: [],
    choices: ["button", "button2", "button3", "button4"]
}


const newGame = () => {
    game.score = 0;
    game.playerMoves = [];
    game.currentGame = [];
    showScore();
}

const showScore = () => {
    document.getElementById('score').innerText = game.score
}

module.exports = {
    game,
    newGame,
    showScore
}