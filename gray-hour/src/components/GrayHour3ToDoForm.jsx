import React from 'react'
import {v4 as uuidv4} from 'uuid';

const GrayHour3ToDoForm = ({task, setTask, todoList, setTodoList}) => {
  let myUuid = uuidv4();
 
  const createTodo = (event) => {
    event.preventDefault()
    console.log("click", myUuid)
    let newTodoObj = {
      id : myUuid,     
      text: task,
      completed: false
    }
    console.log("NEW TODO ==>", newTodoObj)
    setTodoList([...todoList, newTodoObj])
    setTask("")
    
  }

  

  return (
 
      <form className="form-inline p-4" onSubmit={createTodo}>
        <div className="form-group mb-2">
          <label htmlFor="" className="sr-only">What do you need todo?</label>
          <input 
          type="text" 
          className="form-control-plaintext"
          placeholder="type text here" 
          name="task"
          value={task}
          onChange={(event)=> setTask(event.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-warning mb-2">Submit</button>
      </form>
  )
}

export default GrayHour3ToDoForm