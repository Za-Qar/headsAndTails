// Player

// State:
// isTurn, choice

// Behaviour:
// choose

class Player {
  constructor(isTurn, choice) {
    this.isTurn = isTurn;
    this.choice = choice;
  }

  choose() {
    var prompt = window.prompt('heads or tails?');

    if (prompt === 'heads') {
      return (this.choice = 'heads');
    } else if (prompt === 'tails') {
      return (this.choice = 'tails');
    } else {
      alert('please refresh and write heads or tails');
    }
  }
}
