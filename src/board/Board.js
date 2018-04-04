import React, { Component } from 'react';
import Square from '../square/Square';
import './styles.css';

class Board extends Component {
  render() {
    return (
      <div>
        Soy el tablero y tengo un <Square />
      </div>
    );
  }
}

export default Board;
