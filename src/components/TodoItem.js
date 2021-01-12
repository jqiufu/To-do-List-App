import React from 'react';
import PropTypes from 'prop-types';

function TodoItem({todo, markComplete, delTodo}) {
    // Function for the style of a TodoItem
    const getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBotton: '1px #ccc dotted',
            textDecoration: todo.completed ? 'line-through' : 'none' 
        }
    }

    // Function to update state when a TodoItem is completed
    const toggleComplete = () => {
        markComplete(todo.id, !todo.completed);
    };

    // Function to delete a TodoItem
    const deleteTodo = () => {
        delTodo(todo.id);
    };

    return (
        <div style={getStyle()} >
            <p>
                <input type="checkbox" onChange={toggleComplete} /> {' '}
                {todo.title}
                <button onClick={deleteTodo} style={buttonStyle} >x</button>
            </p>
        </div>
    )
}

// Object containing the style of the delete button
const buttonStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

// Proptypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

export default TodoItem
