import React from 'react'
import { v4 as uuidv4 } from 'uuid';

const TaskForm = ({task, setTask, todoList, setTodoList}) => {
    // const {task, setTask, todoList, setTodoList} = props
    let myUuid = uuidv4();

    const createTodo = (event) => {
        event.preventDefault()
        console.log("click", myUuid)
        let newTodoObj = {
            id: myUuid,
            text: task,
            completed: false
        }
        console.log("NEW TODO ==>", newTodoObj)
        // copy my previous list and add a the new todo  at the end
        setTodoList([...todoList, newTodoObj])
        // clear input
        setTask("")
    }

    return (
        <form className='form-container' onSubmit={createTodo} >
            <div className='inner-form-wrapper'>
                <label htmlFor="task">Add Task </label>
                <input 
                type="text" 
                name="task" 
                placeholder='enter task...'
                value={task}
                onChange={(event)=> setTask(event.target.value)}
                />
                <button type="submit">Add item</button>
            </div>
        </form>
    )
}

export default TaskForm