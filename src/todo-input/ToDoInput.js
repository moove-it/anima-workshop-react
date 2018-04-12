import React, { Component } from 'react';
import './styles.css';

class ToDoInput extends Component {
  state = { value: '' };

  onChange = e => this.setState({ value: e.target.value });

  onAddItem = e => {
    if (e.key === 'Enter' && e.target.value) {
      this.props.addItem({ value: e.target.value });
      this.setState({ value: '' });
    }
  };

  render() {
    return (
      <div className="flex flex-auto">
        <input
          type="text"
          className="input-reset ba b--black-20 pa2 mb2 db w-100 mr1"
          value={this.state.value}
          onChange={this.onChange}
          onKeyPress={this.onAddItem}
        />
        <button
          className="f6 link dim ph3 pv2 mb2 dib white add-button"
          onClick={() => this.props.addItem({ value: this.state.value })}
        >
          <i className="fa fa-plus" />
        </button>

        <div
          onClick={this.props.orderByDate}
          className='dim order-button'
        >
          Ordenar
        </div>
      </div>
    );
  }
}

export default ToDoInput;
