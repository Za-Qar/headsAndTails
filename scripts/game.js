class Game {
  constructor(player, coin) {
    this.score = 0;
    this.player = player;
    this.coin = coin;
  }

  //adds to human score
  addScore() {
    this.score++;
    console.log('the score is: ', this.score);
  }

  //takes away from human score
  minusScore() {
    this.score--;
    console.log('the score is: ', this.score);
  }

  //checks coin's side against player choice to check for the winner
  checkWinner() {
    if (player.choice === coin.side) {
      this.addScore();
      console.log('The human won');
    } else {
      this.minusScore();
      console.log('The robot won');
    }
  }

  //plays a game
  play() {
    player.choose();

    coin.flip();

    this.checkWinner();

    if (confirm(`Play again?`)) {
      this.play();
    }
  }
}

let player = new Player();
let coin = new Coin();
let game = new Game();
game.play();
