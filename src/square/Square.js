import React, { Component } from 'react';
import './styles.css';

class Square extends Component {
  render() {
    return (
      <span className="square" onClick={() => this.props.cambiarValor() }>
        {this.props.value}
      </span>
    );
  }
}

export default Square;
