import React, { Component } from "react";

import "./App.css";
import PlayerStatus from "./PlayerStatus";
import Title from "./Title";

export class App extends Component {
  state = { contentBox: Array(9).fill(null), player: null, winner: null };

  // Functions

  onClicked = (index) => {
    if (this.state.player && !this.state.winner) {
      let newBox = this.state.contentBox;

      if (this.state.contentBox[index] === null) {
        let newPlayer = this.state.player === "x" ? "o" : "x";
        newBox[index] = this.state.player;
        this.setState({ contentBox: newBox, player: newPlayer });
      }

      this.playerWinner();
    }
  };

  playerWinner = () => {
    let winningTriplate = [
      ["0", "1", "2"],
      ["3", "4", "5"],
      ["6", "7", "8"],
      ["0", "3", "6"],
      ["1", "4", "7"],
      ["2", "5", "8"],
      ["0", "4", "8"],
      ["2", "4", "6"],
    ];

    for (let index = 0; index < winningTriplate.length; index++) {
      const [a, b, c] = winningTriplate[index];

      if (
        this.state.contentBox[a] &&
        this.state.contentBox[a] === this.state.contentBox[b] &&
        this.state.contentBox[a] === this.state.contentBox[c]
      ) {
        alert(`Player ${this.state.player.toUpperCase()} Won!`);

        this.setState({ winner: this.state.player });
      }
    }
  };

  setPlayer(player) {
    this.setState({ player });
  }

  renderContentBox = () => {
    return this.state.contentBox.map((item, index) => {
      return (
        <div
          className="box_item"
          key={index}
          onClick={() => this.onClicked(index)}
        >
          {item}
        </div>
      );
    });
  };

  render() {
    return (
      <div className="center_box">
        <Title />

        <PlayerStatus
          player={this.state.player}
          setPlayer={(e) => this.setPlayer(e)}
        />
        <div className="content_box">{this.renderContentBox()}</div>
      </div>
    );
  }
}

export default App;
