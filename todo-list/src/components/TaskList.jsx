import React from 'react'

const TaskList = ({ task, setTask, todoList, setTodoList }) => {

    console.log("LIST", todoList)

    // DELETE FUNCTION
    const deleteTodo = (deletedTodoID) => {
        console.log(deletedTodoID)
        // using filter because we're removing an item
        // list excluding the ID that does not match todoItem.id
        const filteredList = todoList.filter((todoItem) => todoItem.id !== deletedTodoID)
        console.log("FILTERED LIST --->", filteredList)
        setTodoList(filteredList)
    }
    // STRIKETHROUGH
    const handleCheck = (todoObj) => {
        console.log("todoObj ------>", todoObj)
        todoObj.completed = !todoObj.completed;
        setTodoList([...todoList]);

    }

    return (
        <ul className='task-list'>
            {
                todoList.map((oneTodo, index) => (
                    <div key={index} className='task-item'>
                        <li style={{ textDecoration: oneTodo.completed ? "line-through" : "None" }}>
                            {oneTodo.text}
                            <input
                                checked={oneTodo.completed}
                                type="checkbox"
                                onChange={(event) => handleCheck(oneTodo)} 
                                />
                            <button onClick={(e) => deleteTodo(oneTodo.id)}> Delete</button>
                        </li>
                    </div>
                ))
            }
        </ul>
    )
}

export default TaskList