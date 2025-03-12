import React, { useState, useEffect } from 'react';
import Todo from './Todo';
import './TodoList.css';

interface TodoItem {
  id: string;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>(() => {
    // Load todos from localStorage on initial render
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [newTodoText, setNewTodoText] = useState('');

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodoText.trim() === '') return;
    
    const newTodo: TodoItem = {
      id: Date.now().toString(),
      text: newTodoText,
      completed: false
    };
    
    setTodos([...todos, newTodo]);
    setNewTodoText('');
  };

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const getCompletedCount = () => {
    return todos.filter(todo => todo.completed).length;
  };

  return (
    <div className="todo-list-container">
      <h1>Todo List</h1>
      
      <form onSubmit={addTodo} className="add-todo-form">
        <input
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          placeholder="Add a new task..."
          className="todo-input"
        />
        <button type="submit" className="add-button">Add</button>
      </form>
      
      <div className="todo-stats">
        <p>{todos.length} total tasks • {getCompletedCount()} completed</p>
      </div>
      
      <div className="todos-container">
        {todos.length === 0 ? (
          <p className="empty-message">No tasks yet. Add one above!</p>
        ) : (
          todos.map(todo => (
            <Todo
              key={todo.id}
              id={todo.id}
              text={todo.text}
              completed={todo.completed}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default TodoList; 