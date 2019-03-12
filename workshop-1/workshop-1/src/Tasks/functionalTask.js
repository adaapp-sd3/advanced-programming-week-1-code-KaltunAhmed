import React, { Component } from "react";

function Task(props){
    let [accepcted, setAccepted] = useState(false)
    return (
        <div className = "Task">
        <h2>{props.title}</h2>
        {accepcted && <p>{props.description}</p>}
        <button onClick = {() => setAccepted(!accepcted)}> Accecpt Task</button>
        </div>
    )
}

export default Task;