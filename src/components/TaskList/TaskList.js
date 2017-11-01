import React, { Component } from 'react'

import AddTask from './AddTask/AddTask';
import TaskListItem from './TaskListItem/TaskListItem';
import './TaskList.css';
import {connect} from 'react-redux';

class TaskList extends Component {
  render () {
    let rows = [];

    if (this.props.activeFilter === 'ACTIVE'){
      rows = this.props.tasks.filter(task => task.completed !== true)
                             .map(task => {
        return <TaskListItem task={task}/>
      })
    } else if (this.props.activeFilter === 'COMPLETED'){
      rows = this.props.tasks.filter(task => task.completed !== false)
                            .map(task => {
        return <TaskListItem task={task}/>
      })
    } else {
      rows = this.props.tasks.map(task => {
        return <TaskListItem task={task}/>
    })
  }

    return (
      <div className="task-list">
        <AddTask />
        {rows}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    tasks: state.tasks,
    activeFilter: state.activeFilter
  }
}

export default connect(mapStateToProps)(TaskList)