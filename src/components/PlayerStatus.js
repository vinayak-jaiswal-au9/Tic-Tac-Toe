import React, { Component } from "react";
import Player from "./SelectPlayer";

class PlayerStatus extends Component {
  onSetPlayer(e) {
    this.props.setPlayer(e);
  }

  render() {
    return this.props.player ? (
      <h2>Player Chance : {this.props.player.toUpperCase()}</h2>
    ) : (
      <Player player={(e) => this.onSetPlayer(e)} />
    );
  }
}

export default PlayerStatus;
