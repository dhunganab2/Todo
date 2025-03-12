import React from 'react';
import './Todo.css';

interface TodoProps {
  id: string;
  text: string;
  completed: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const Todo: React.FC<TodoProps> = ({ id, text, completed, onToggle, onDelete }) => {
  return (
    <div className={`todo-item ${completed ? 'completed' : ''}`}>
      <div className="todo-content">
        <input 
          type="checkbox" 
          checked={completed} 
          onChange={() => onToggle(id)} 
          className="todo-checkbox"
        />
        <span className="todo-text">{text}</span>
      </div>
      <button 
        onClick={() => onDelete(id)} 
        className="delete-button"
        aria-label="Delete todo"
      >
        ✕
      </button>
    </div>
  );
};

export default Todo; 