import React, { useState } from 'react';
import Proptypes from 'prop-types';

function AddTodo({addTodo}) {

    const [title, setTitle] = useState(' ');

    // Function to manage the text input of the AddTodo component
    const onChange = (e) => setTitle(e.target.value);

    // Function that deals with submiting a TodoItem
    const onSubmit = (e) => {
        e.preventDefault();
        addTodo(title);
        setTitle(' ');
    };

    return (
        <form onSubmit={onSubmit} style={{display: 'flex'}}>
            <input 
                type="text"
                name="title"
                style={{flex: '10', padding: '5px'}}
                placeholder="Add Todo ..."
                value={title}
                onChange={onChange}
            />
            <input 
                className="btn"
                type="submit"
                value="Submit"
                style={{flex: '1'}}
            />
        </form>
    )
}

// Proptypes
AddTodo.propTypes = {
    addTodo: Proptypes.func.isRequired
}

export default AddTodo
