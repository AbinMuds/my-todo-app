import React, { Component } from 'react'

export default class Todo extends Component {
    render() {
        return (
            <li data-todos-index={this.props.todo._id}>
                <span className="todo-item">{this.props.todo.body}</span>
            </li> 
        )
    }
}

