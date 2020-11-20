// Coin

// State:
// side

// Behaviour:
// flip

class Coin {
  constructor(side) {
    //explain why side isn't in the constructor
    //explain why constructor is empty
    this.side = side;
  }

  flip() {
    let ranNum = Math.floor(Math.random() * 2);
    if (ranNum === 0) {
      return (this.side = "heads");
    } else {
      return (this.side = "tails");
    }
  }
}

// let ourCoin = new Coin("heads");
// console.log(ourCoin.flip());
