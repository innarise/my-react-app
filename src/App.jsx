// src/App.jsx
import React from 'react';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  return (
    <div>
      <h1>Мои домашние дела</h1>
      <TodoList />
    </div>
  );
}

export default App;
