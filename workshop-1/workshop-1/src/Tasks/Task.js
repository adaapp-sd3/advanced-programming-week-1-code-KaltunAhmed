import React, { Component } from "react";

class Task extends Component {
  constructor() {
    super();
    this.state = {
      accepted: false
    };
    this.state = {
      nameOfClass: "Task-NotAccepted"
    }
  }

  handleAcceptTask = () => {
    this.setState({
      accepted: !this.state.accepted
    });
  }
  taskClassName = () => {
    if (this.state.accepted === true){
      nameOfClass = "TaskAccepted"
    } else {
      nameOfClass = "Task-NotAccepted"
    }
  }

  render() {
    return (
      <div className={nameOfClass}>
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
        {this.state.accepted && <p>This task has been accepted</p>}
        <button onClick={this.handleAcceptTask}> Acccept task</button>
      </div>
    );
  }
}

export default Task;
