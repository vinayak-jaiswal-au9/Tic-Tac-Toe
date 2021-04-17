import React, { Component } from "react";

export class SelectPlayer extends Component {
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.player(e.target.player.value);
  };

  render() {
    return (
      <form onSubmit={(e) => this.onFormSubmit(e)}>
        <label>
          <span>Player X</span>
          <input
            className="custom_radio"
            type="radio"
            name="player"
            value="x"
          />
        </label>
        <label>
          <span>Player O</span>
          <input
            className="custom_radio"
            type="radio"
            name="player"
            value="o"
          />
        </label>

        <input className="player_input" type="submit" value="Start" />
      </form>
    );
  }
}

export default SelectPlayer;
