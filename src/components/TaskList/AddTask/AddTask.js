import React, { Component } from 'react'
import { connect } from 'react-redux';
import { updateInput, addTask } from '../../../ducks/reducer';
import './AddTask.css';

class AddTask extends Component {
  render () {
    return (
      <div className="add-task">
        <button onClick={this.props.addTask}>+</button>
        <input placeholder='ADD ITEM' onChange={(e) => this.props.updateInput(e.target.value)}/>
      </div>
    )
  }
}

function mapStateToProps(state){
  const { userInput } = state;

  return {
    userInput
  }
}

export default connect(mapStateToProps, { updateInput, addTask })(AddTask)