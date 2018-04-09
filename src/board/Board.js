import React, { Component } from 'react';
import Square from '../square/Square';
import './styles.css';

class Board extends Component {
  render() {
    return (
      <div>
        <Square value={this.props.squares[0]} />
        <Square value={this.props.squares[1]} />
        <Square value={this.props.squares[2]} />
      </div>
    );
  }
}

export default Board;
