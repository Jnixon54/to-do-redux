import React, { Component } from 'react';

import {removeTask, toggleCheck} from '../../../ducks/reducer';
import {connect} from 'react-redux'

import './TaskListItem.css';

class TaskListItem extends Component {
  render () {
    
    return (
      <div className="item" style={{'text-decoration': this.props.task.completed ? 'line-through' : 'none'}}>
        <label >
          <input type="checkbox" className="task-checkbox" checked={this.props.task.completed} 
                 onChange={() => this.props.toggleCheck(this.props.task.id)}/>
        </label>
        {this.props.task.id + this.props.task.text}
        <button onClick={() => this.props.removeTask(this.props.task.id)}>X</button>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    state
  }
}

export default connect(mapStateToProps, {removeTask, toggleCheck})(TaskListItem)