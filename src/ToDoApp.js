import React, { Component } from 'react';
import ToDoList from './todo-list/ToDoList';
import ToDoInput from './todo-input/ToDoInput';
import animaLogo from './assets/anima-logo.png';
import mooLogo from './assets/mooveit-logo.svg';
import 'font-awesome/css/font-awesome.css';
import 'tachyons/css/tachyons.css';
import './ToDoApp.css';

class ToDoAP extends Component {
  state = { todos: [], filter: null };

  addItem = ({ value }) => {
    const { todos } = this.state;
    const newTodo = {
      value,
      id: Math.random(),
      status: 'active',
      date: Date.now(),
    };
    this.setState({
      todos: [newTodo].concat(todos),
    });
  };

  removeItem = ({ id }) => {
    const { todos } = this.state;
    const index = todos.indexOf(todos.find(v => v.id === id));
    if (index > -1) {
      todos[index].status = 'deleted';
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

  filterTodos = () => {
    const { todos, filter } = this.state;

    return todos.filter((todo) => {
      return !filter || todo.status === filter;
    });
  }

  onFilterClicked = (filter) => {
    this.setState({
      filter: filter
    });
  }

  orderByDate = () => {
    const { todos } = this.state;
    this.setState({todos: todos.slice().sort(this.compareDates)});
  }

  compareDates = (a,b) => {
    if (a.date < b.date)
      return -1;
    if (a.date > b.date)
      return 1;
    return 0;
  }

  render () {
    const { filter } = this.state;

    return (
      <div className="todo-app">
        <div className="header flex justify-center items-center ma2">
          <img src={mooLogo} alt="" className="c-moo-logo u-fill--white" />
          <i className="fa fa-plus black ml2 mr2" />
          <img src={animaLogo} alt="" />
        </div>

        <ToDoInput
          addItem={this.addItem}
          orderByDate={this.orderByDate}
        />

        {!this.state.todos.length && (
          <span className="gray center flex justify-center f4 fw1 mv3">
            Lista de tareas :)
          </span>
        )}

        <ToDoList
          todos={this.filterTodos()}
          onRemove={this.removeItem}
          onComplete={this.completeItem}
        />

        <div className='filters'>
          <div
            onClick={this.onFilterClicked.bind(this, null)}
            className={`filter-item ${filter === null ? 'filter-item-selected' : ''}`}
          >
            Todos
          </div>

          <div
            onClick={this.onFilterClicked.bind(this, 'active')}
            className={`filter-item ${filter === 'active' ? 'filter-item-selected' : ''}`}
          >
            Pendientes
          </div>

          <div
            onClick={this.onFilterClicked.bind(this, 'completed')}
            className={`filter-item ${filter === 'completed' ? 'filter-item-selected' : ''}`}
          >
            Completados
          </div>

          <div
            onClick={this.onFilterClicked.bind(this, 'deleted')}
            className={`filter-item ${filter === 'deleted' ? 'filter-item-selected' : ''}`}
          >
            Borrados
          </div>
        </div>
      </div>
    );
  }
}

export default ToDoAP;
