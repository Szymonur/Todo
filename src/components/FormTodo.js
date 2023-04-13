import { render } from "@testing-library/react";
import React, { useState } from "react"


class FormTodo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {newTodo: ''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({newTodo: event.target.value});
    }
  
    handleSubmit(event) {
    //   alert('Podano następujące imię: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <div>
            
            <div className="card"> 

                <h2> Add new</h2>
                <form onSubmit={this.handleSubmit}>
                  <label>
                    <input type="text" value={this.state.newTodo} onChange={this.handleChange} />
                  </label>
                  <input type="submit" value="Add"/>
                  
                </form>
            </div>
        </div>
      );
    }
  }

  export default FormTodo