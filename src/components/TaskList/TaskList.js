import React, { Component } from 'react'

import AddTask from './AddTask/AddTask';
import TaskListItem from './TaskListItem/TaskListItem';

class TaskList extends Component {
  render () {
    let rows = [];
    
    rows = this.props.tasks.map(task => {
      return <TaskListItem task={task}/>
      }
    )

    return (
      <div>
        <AddTask />
        {rows}
      </div>
    )
  }
}

export default TaskList