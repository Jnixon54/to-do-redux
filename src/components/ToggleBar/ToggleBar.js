import React, { Component } from 'react'
import './ToggleBar.css';
import { connect } from 'react-redux';
import {setFilter} from '../../ducks/reducer';

class ToggleBar extends Component {
  render () {
    return (
      <div className="toggle-bar">
        <p>Show:</p>

        <label className="switch">
          <input type="radio" value="ALL" checked={this.props.activeFilter === 'ALL'} 
                 onChange={e => this.props.setFilter(e.target.value)}/>All
        </label>
        <label className="switch" >
          <input type="radio" value="ACTIVE" checked={this.props.activeFilter === 'ACTIVE'}
                 onChange={e => this.props.setFilter(e.target.value)}/>Active
        </label>
        <label className="switch" >
          <input type="radio" value="COMPLETED" checked={this.props.activeFilter === 'COMPLETED'}
                 onChange={e => this.props.setFilter(e.target.value)}/>Completed
        </label>

      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    activeFilter: state.activeFilter
  }
}

export default connect(mapStateToProps, {setFilter})(ToggleBar)