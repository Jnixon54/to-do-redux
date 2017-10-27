import React, { Component } from 'react'

class ToggleBar extends Component {
  render () {
    return (
      <div>
        <p>Show:</p>
        <label class="switch">
          <input type="checkbox" />All
        </label>
        <label class="switch">
          <input type="checkbox" />Active
        </label>
        <label class="switch">
          <input type="checkbox" />Completed
        </label>
      </div>
    )
  }
}

export default ToggleBar