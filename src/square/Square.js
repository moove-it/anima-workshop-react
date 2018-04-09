import React, { Component } from 'react';
import './styles.css';

class Square extends Component {
  render() {
    return (
      <div className="square" onClick={() => alert('soy un cuadrado')}>
        {this.props.value}
      </div>
    );
  }
}

export default Square;
