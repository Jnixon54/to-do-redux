import React, { Component } from 'react';
import './App.css';

import ToggleBar from './components/ToggleBar/ToggleBar';
import TaskList from './components/TaskList/TaskList';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      userInput: '',
      itemsToDisplay: 'All'
      
    }
    
  }

  render() {
    return (
      <div className="App">
        <ToggleBar />
        <TaskList tasks={this.props.tasks}/>
      </div>
    );
  }
}

export default App;
