import React, { Component } from "react";

class Task extends Component {
  constructor() {
    super();
    this.state = {
      accepted: false
    };
  }

  handleAcceptTask = () => {
    this.setState({
      accepted: !this.state.accepted
    });
  }

  taskClassName = (nameOfClass) => {
    if (this.state.accepted){
      nameOfClass = "TaskAccepted"
    } else {
      nameOfClass = "Task-NotAccepted"
    }
    return this.taskClassName('')
  }

  render() {
    return (
      <div className={this.taskClassName}>
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
        {this.state.accepted && <p>This task has been accepted</p>}
        <button onClick={this.handleAcceptTask}> Acccept task</button>
      </div>
    );
  }
}

export default Task;
