import React, {useState} from 'react'

const GrayHour3ToDoListView = ({task, setTask, todoList, setTodoList}) => {
  
  console.log("TASK from DISPLAY -->", task )
  console.log("LIST", todoList)

  // const [strikethrough, setStrikethrough] = useState('')

  // const [checkedColor, setCheckedColor] = useState('')

  // DELETE FUNCTION
  const deleteTodo = (deletedTodoID) => {
    console.log(deletedTodoID)
    // using filter because we're removing an item
    // list excluding the ID that does not match todoItem.id
    const filteredList = todoList.filter((todoItem) => todoItem.id !== deletedTodoID)
    console.log("FILTERED LIST --->", filteredList)
    setTodoList(filteredList)
  }

  
  const handleCheck = (todoObj) => {
    console.log("todoObj ------>", todoObj)
    todoObj.completed = !todoObj.completed;
    setTodoList([...todoList]);
  
  }

  // this works but changes the order every time
  // const handleCheck = (checkedID) => {
  //   console.log("CHECKED ID", checkedID)
  //   // filter out correct object
  //   // give me an array of one obj
  //   const oneObjectList = todoList.filter((todoItem) => todoItem.id === checkedID)
  //   console.log("ONE OBJ", oneObjectList[0])
  //   let oneObject = oneObjectList[0]
  //   // filter objects that don't match
  //   // oneObject.completed ? false : true
  //   oneObject.completed = oneObject.completed ? false : true

  //   const newList =  todoList.filter((todoItem) => todoItem.id !== checkedID)
  //   // if/else true/untrue
  //   // return state of updated list
  //   setTodoList([...newList, oneObject])

  // }


  return (
    <ul className='list-container'>
      {
        todoList.map((oneTodo, index) => (
          <div key={index} style= {{display: "flex", margin: '15px'}}>
          <li style={{textDecoration: oneTodo.completed ? "line-through": "None" }}>
            {oneTodo.text} 
          </li>
          {/* used with oneTodo id */}
            {/* <input 
            checked ={oneTodo.completed}
            type="checkbox" 
            onChange={(event) => handleCheck(oneTodo.id)}/> */}

            <input 
            checked ={oneTodo.completed}
            type="checkbox" 
            onChange={(event) => handleCheck(oneTodo)}/>
            <button className="btn btn-danger" onClick={(e) => deleteTodo(oneTodo.id)}> Delete</button>
          </div>
        ))
      }

    
    </ul>
  )
}

export default GrayHour3ToDoListView




// doesnt't work- don't know fully why
 // const checkList = todoList.map((todoItem) => {
    //   if(todoItem.id === checkedID && todoItem.completed === false){
    //     console.log("----- turn true -----")
    //     setStrikethrough(`'line-through'`)
    //     setCheckedColor('red')
    //   } else if ((todoItem.id === checkedID && todoItem.completed === true)) {
    //     console.log("****** turn false *****")
    //     todoItem.completed = false
    //     setStrikethrough('')
    //     setCheckedColor('')
    //   }
    //   return checkList
    // })



    // const updatedTodoList = todoList.map((task, i) => {
    //   if (idx === i) {
    //     console.log("TASK ---> ", task )
        
    //     // const updatedTodo = { ...task, completed: !task.completed}
    //     // return updatedTodo
    //   }
    // })
    // setTodoList(updatedTodoList)


    // // filter out correct object
    // // give me an array of one obj
    // const oneObjectList = todoList.filter((todoItem) => todoItem.id === checkedID)
    // console.log("ONE OBJ", oneObjectList[0])
    // let oneObject = oneObjectList[0]
    // // filter objects that don't match
    // // oneObject.completed ? false : true
    // oneObject.completed = !oneObject.completed;

    // const newList =  todoList.filter((todoItem) => todoItem.id !== checkedID)
    // // if/else true/untrue
    // // return state of updated list
    // setTodoList(newList)