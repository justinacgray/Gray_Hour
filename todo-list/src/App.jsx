import './App.css';
import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  // having state at the highest level to share amongst the children

  // what do I want to track - what is changing?
  //inputs are changing 
  const [task, setTask] = useState('')

  // list(array) is changing
  const [todoList, setTodoList] = useState([])



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
