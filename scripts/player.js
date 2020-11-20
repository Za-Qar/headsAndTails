class Player {
  constructor(choice) {
    this.choice = choice;
  }

  //lets the player choose heads or tails
  choose() {
    var prompt = window.prompt('heads or tails?');

    if (prompt === 'heads') {
      this.choice = 'heads';
      console.log(this.choice);
    } else {
      this.choice = 'tails';
      console.log(this.choice);
    }
  }
}
