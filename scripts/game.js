/*
// Game

// State:
// score, player, computerPlayer, coin

// Behaviour:
// changeScore

*/

//MVP => Console
//MLP => HTML (canvas)

class Game {
  constructor(score, player, computerPlayer, coin) {
    this.score = score;
    this.player = player;
    this.computerPlayer = computerPlayer;
    this.coin = coin;
  }

  addScore() {
    console.log(this.score++);
  }

  minusScore() {
    console.log(this.score--);
  }

  changeTurn() {
    player.isTurn = !player.isTurn;
    computerPlayer.isTurn = !computerPlayer.isTurn;
  }
}

let player = new Player();
let computerPlayer = new Player();
