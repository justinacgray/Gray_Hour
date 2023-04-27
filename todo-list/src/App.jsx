import './App.css';
import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  // having state at the highest level to share amongst the children

  // what do I want to track - what is changing?
  //inputs are changing 
  //starting out empty string because we want a clean slate
  const [task, setTask] = useState('') 

  // list(array) is changing
  // setting it empty square brackets so we don't get an error
  const [todoList, setTodoList] = useState([]) //really important that you describe the data type

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <span>What's the plans for today!</span>

      <TaskForm 
      task={task} 
      setTask={setTask} 
      todoList={todoList}
      setTodoList={setTodoList}
      />
      <TaskList 
      task={task} 
      setTask={setTask} 
      todoList={todoList}
      setTodoList={setTodoList}
      />
    </div>
  );
}

export default App;
