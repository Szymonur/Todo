import { render } from "@testing-library/react";
import React, { useState } from "react"
import FormTodo from './FormTodo'

class Todo extends React.Component {
    state = {
        new: '',
        todo_elements: [
            {id: '123123', title: 'zrobić zakupy', status: true},
            {id: '123223', title: 'wynieść smieci', status: true}
        ],
    }

    updateStatus = (id) => {
        this.setState(prevState => {
            const updatedTodoElements = prevState.todo_elements.map(todo => {
                if (todo.id === id) {
                    return {...todo, status: !todo.status}; 
                }
                return todo;
            });
            return { todo_elements: updatedTodoElements };
        });
    }
    

    render(){
        const todo_elements = this.state.todo_elements.map(e => {
            if (e.status) {
                return <div key={e.id} className="list_element" > {e.title}
                    <button onClick={ () => this.updateStatus(e.id)}> DONE! </button>
                </div>
            } else {
                return null
            }
        })
        const done_elements = this.state.todo_elements.map(e => {
            if (!e.status) {
                return <div key={e.id} className="list_element" > {e.title}
                    <button onClick={ () => this.updateStatus(e.id)}> Undo! </button>
                </div>
            } else {
                return null
            }
        })
        
        return(
            <div>
                <FormTodo />
                <div className="card">
                    <h1>Todo</h1>
                    {todo_elements}
                </div>
                <div className="card">
                    <h3>done</h3>
                    {done_elements}
                </div>
            </div>
        )
    }
}

export default Todo