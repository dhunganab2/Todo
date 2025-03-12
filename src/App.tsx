import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <ThemeToggle />
        <TodoList />
      </div>
    </ThemeProvider>
  );
}

export default App;
