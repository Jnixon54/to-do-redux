import React, { Component } from 'react'

class TaskListItem extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     task = '',
  //     isComplete: false
  //   }
  // }

// should I manage the state of the list items in their own component?

  render () {
    return (
      <div>
        <label >
          <input type="checkbox" className="task-checkbox"/>{this.props.task.text}
        </label>
        <button>X</button>
      </div>
    )
  }
}

export default TaskListItem