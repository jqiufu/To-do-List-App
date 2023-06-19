import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import { v4 as uuidv4 } from 'uuid';

import './App.css';

const initialTodos = [
  {
    id: uuidv4(),
    title: 'Walk the dog',
    completed: false
  },
  {
    id: uuidv4(),
    title: 'Do Math homework',
    completed: false
  },
  {
    id: uuidv4(),
    title: 'Cook dinner',
    completed: false
  }
];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  // Function to toggle the complete property on the state
  const markComplete = (id, isCompleted) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: isCompleted };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  // Function to delete a TodoItem
  const delTodo = (id) => {
    const newTodos = [...todos.filter((todo) => todo.id !== id)];
    setTodos(newTodos);
  };

  // Function to add a TodoItem
  const addTodo = (title) => {
    const newItem = {
      id: uuidv4(),
      title,
      completed: false
    };

    setTodos([...todos, newItem]);
  };

  return (
    <div className="App">
      <div className="container">
        <Header />
        <Route
          exact
          path="/"
          render={(props) => (
            <>
              <AddTodo addTodo={addTodo} />
              <Todos
                todos={todos}
                markComplete={markComplete}
                delTodo={delTodo}
              />
            </>
          )}
        />
        <Route path="/about" component={About} />
      </div>
    </div>
  );
}

export default App;
