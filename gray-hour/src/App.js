import { useState } from 'react';
import './App.css';
import GrayHour3ToDoForm from './components/GrayHour3ToDoForm';
import GrayHour3ToDoListView from './components/GrayHour3ToDoListView';
// import GrayHour1 from './components/GrayHour1';
// import GrayHour2 from './components/GrayHour2';
// import GrayHour2P2 from './components/GrayHour2P2';


function App() {

  
  const [task, setTask] = useState('') 

  const [todoList, setTodoList] = useState([]) //really important that you describe the data type


  return (
    <div className="main-div">
      {/* <GrayHour1 /> */}
      {/* <GrayHour2 /> */}
      {/* <GrayHour2P2 /> */}
      <GrayHour3ToDoForm todoList={todoList} setTodoList={setTodoList} task={task} setTask={setTask}  />
      <GrayHour3ToDoListView todoList={todoList} setTodoList={setTodoList} task={task} setTask={setTask} />

    </div>
  );
}

export default App;
