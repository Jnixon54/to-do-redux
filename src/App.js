import React, { Component } from 'react';
import './App.css';

import ToggleBar from './components/ToggleBar/ToggleBar';
import TaskList from './components/TaskList/TaskList';

import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="todo-list">
        <ToggleBar />
        <TaskList/>
      </div>
    );
  }
}

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps)(App);