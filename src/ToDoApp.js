import React, { Component } from 'react';
import ToDoList from './todo-list/ToDoList';
import ToDoInput from './todo-input/ToDoInput';
import animaLogo from './assets/anima-logo.png';
import mooLogo from './assets/mooveit-logo.svg';
import 'font-awesome/css/font-awesome.css';
import 'tachyons/css/tachyons.css';
import './ToDoApp.css';

class ToDoAP extends Component {
  state = { todos: [] };

  addItem = ({ value }) => {
    const { todos } = this.state;
    todos.push({
      value,
      id: Math.random(),
      status: 'active',
    });
    this.setState({
      todos,
    });
  };

  removeItem = ({ id }) => {
    const { todos } = this.state;
    const index = todos.indexOf(todos.find(v => v.id === id));
    if (index > -1) {
      todos.splice(index, 1);
      this.setState({ todos });
    }
  };

  completeItem = ({ id }) => {
    const { todos } = this.state;
    const index = todos.indexOf(todos.find(v => v.id === id));
    if (index > -1) {
      todos[index].status = 'completed';
      this.setState({ todos });
    }
  };

  render() {
    return (
      <div className="todo-app">
        <div className="header flex justify-center items-center ma2">
          <img src={mooLogo} alt="" className="c-moo-logo u-fill--white" />
          <i className="fa fa-plus black ml2 mr2" />
          <img src={animaLogo} alt="" />
        </div>
        <ToDoInput addItem={this.addItem} />
        {!this.state.todos.length && (
          <span className="gray center flex justify-center f4 fw1 mv3">
            Lista de tareas :)
          </span>
        )}
        <ToDoList
          todos={this.state.todos}
          onRemove={this.removeItem}
          onComplete={this.completeItem}
        />
      </div>
    );
  }
}

export default ToDoAP;
