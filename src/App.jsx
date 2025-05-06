import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  const handleDelete = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-container">
        <h1>🌈 Learn React Redux Toolkit</h1>
        <div className="input-group">
          <input
            type="text"
            value={input}
            placeholder="Enter a Todo..."
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={handleAdd}>Add Todo</button>
        </div>
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <li key={index} className="todo-item">
              <input type="checkbox" />
              <span>{todo}</span>
              <button className="delete-btn" onClick={() => handleDelete(index)}>🗑️</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
