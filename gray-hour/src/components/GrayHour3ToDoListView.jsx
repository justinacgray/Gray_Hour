import React, {useState} from 'react'

const GrayHour3ToDoListView = ({task, setTask, todoList, setTodoList}) => {
  
  console.log("TASK from DISPLAY -->", task )
  console.log("LIST", todoList)

  const [strikethrough, setStrikethrough] = useState('')

  const deleteTodo = (deletedTodoID) => {
    console.log(deletedTodoID)
    const filteredList = todoList.filter((todoItem) => todoItem.id !== deletedTodoID)
    console.log("FILTERED LIST --->", filteredList)
    setTodoList(filteredList)
  }

  // fix strikethrough 
  const handleCheck = (checkedID) => {
    const updatedList = todoList.map((todoItem) => {
      console.log("UPDATED CHECK LIST --->", updatedList)
      if(todoItem.id === checkedID) {
        todoItem.completed = true
        return todoItem
      }
        else{
          return todoItem
        }
    })

  }



  return (
    <ul className='list-container'>
      {
        todoList.map((oneTodo, index) => (
          <div key={index}>
          <li 
          style={{
            textDecoration : {strikethrough}, 
            color : 'red'}}>
            {oneTodo.text}
          </li>
            <input 
            checked ={oneTodo.completed}
            type="checkbox" 
            onChange={() => handleCheck(oneTodo.id)}/>
            <button className="btn btn-danger" onClick={(e) => deleteTodo(oneTodo.id)}> Delete</button>
          </div>
        ))
      }

    
    </ul>
  )
}

export default GrayHour3ToDoListView