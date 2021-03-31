import React, { Component } from 'react'
import TodoModel from '../models/Todo';
import Todos from '../components/Todos';
import CreateTodoForm from '../components/CreateTodoForm';

export default class TodosContainer extends Component {
    state = {
        todos: [],
    }

    createTodo = (todo) => {
        let newTodo = {
            body:todo,
            completed:false,
        }
    }
    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        TodoModel.all().then((res) => {
            this.setState({
                todos:res.data.todos,
            })
        });
    }
    render() {
        
        return (
            <div className='todosContainer'>
                <CreateTodoForm 
                    createTodo={this.createTodo} />
                <Todos
                    todos={this.state.todos} />
             </div>
        )
    }
}

