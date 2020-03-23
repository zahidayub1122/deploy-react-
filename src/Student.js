import React, { Component } from 'react'

export default class Student extends Component {
  render() {
    return (
      <div>
        <h1>THiis loginpage</h1>
        <button type = "button" onClick = {this.props.handler2}>logout</button>
      </div>
    )
  }
}
