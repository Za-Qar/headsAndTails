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
    let prompt = prompt("heads or tails?");

    if (prompt === "heads") {
      this.choice = "heads";
    } else if (prompt === "tails") {
      this.choice = "tails";
    } else {
      alert("please refresh and write heads or tails");
    }
  }
}
