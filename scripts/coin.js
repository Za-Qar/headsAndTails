class Coin {
  constructor(side) {
    this.side = side;
  }

  // flip the coin to give heads or tails at random
  flip() {
    let ranNum = Math.floor(Math.random() * 2);
    if (ranNum === 0) {
      this.side = 'heads';
      console.log(this.side);
    } else {
      this.side = 'tails';
      console.log(this.side);
    }
  }
}
