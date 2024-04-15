import { useState } from "react"


function EditTodoForm({editTask, todo}){
    const [task, setTask] = useState(todo.task)

    const handleSubmit = event => {
        event.preventDefault();

        editTask(task, todo.id)
        
        setTask('')
    }

    return(
    <form className='todoform' onSubmit={handleSubmit}>
        <input 
            type='text' 
            className='todoform-input' 
            placeholder="update todo" 
            onChange={(event)=> setTask(event.target.value)}
            value={task}
        />
        <button type="submit" className="todo-btn">Update Task</button>
    </form>
    )
}
export default EditTodoForm