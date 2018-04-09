import React, { Component } from 'react';
import Board from './board/Board';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = { squares: Array(9).fill('0') };
  }

  render() {
    return (
      <div className="game">
        TA TE TI
        <Board squares={this.state.squares} />
      </div>
    );
  }
}

export default Game;
