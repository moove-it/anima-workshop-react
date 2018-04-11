import React, { Component } from 'react';
import Board from './board/Board';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = { squares: Array(9).fill('0') };
  }

  cambiarValor () {
    this.setState({ value: 1 });
  }

  render() {
    return (
      <div className="game">
        TA TE TI
        <Board 
          squares={this.state.squares}
          cambiarValor={() => { this.cambiarValor() }}
        />
      </div>
    );
  }
}

export default Game;
