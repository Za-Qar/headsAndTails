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
    this.score = 0;
    this.player = player;
    this.computerPlayer = computerPlayer;
    this.coin = coin;
  }

  addScore() {
    this.score++;
    console.log('the score is: ', this.score);
  }

  minusScore() {
    this.score--;
    console.log('the score is: ', this.score);
  }

  changeTurn() {
    player.isTurn = !player.isTurn;
    computerPlayer.isTurn = !computerPlayer.isTurn;
  }

  play() {
    console.log(player.choose());

    console.log(coin.flip());

    this.checkWinner();

    this.changeTurn();

    // if (coin.flip() === player.choice) {
    // }
    console.log(player, computerPlayer, coin);

    if (confirm('Play again?')) {
      this.play();
    }
  }

  checkWinner() {
    if (player.choice === coin.side) {
      this.addScore();
      console.log('The human won');
    } else {
      this.minusScore();
      console.log('The robots are taking over');
    }
  }
}
let player = new Player(true);
let computerPlayer = new Player(false);
let coin = new Coin();
let game = new Game();
game.play();
