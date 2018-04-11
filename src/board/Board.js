import React, { Component } from 'react';
import Square from '../square/Square';
import './styles.css';

class Board extends Component {
  render() {
    return (
      <div>
        <div>
          <Square value={this.props.squares[0]} cambiarValor={() => this.props.cambiarValor(0) } />
          <Square value={this.props.squares[1]} cambiarValor={() => this.props.cambiarValor(1) } />
          <Square value={this.props.squares[2]} cambiarValor={() => this.props.cambiarValor(2) } />
        </div>
        <div>
          <Square value={this.props.squares[0]} cambiarValor={() => this.props.cambiarValor(0) } />
          <Square value={this.props.squares[1]} cambiarValor={() => this.props.cambiarValor(1) } />
          <Square value={this.props.squares[2]} cambiarValor={() => this.props.cambiarValor(2) } />
        </div>
        <div>
          <Square value={this.props.squares[0]} cambiarValor={() => this.props.cambiarValor(0) } />
          <Square value={this.props.squares[1]} cambiarValor={() => this.props.cambiarValor(1) } />
          <Square value={this.props.squares[2]} cambiarValor={() => this.props.cambiarValor(2) } />
        </div>
      </div>
    );
  }
}

export default Board;
