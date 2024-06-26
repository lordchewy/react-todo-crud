import { useState } from "react"


function TodoForm({addTodo}){
    const [task, setTask] = useState('')

    const handleSubmit = event => {
        event.preventDefault();
        if(task){
            addTodo(task)
        }
        setTask('')
    }

    return(
    <form className='todoform' onSubmit={handleSubmit}>
        <input 
            type='text' 
            className='todoform-input' 
            placeholder="Add a new task..." 
            onChange={(event)=> setTask(event.target.value)}
            value={task}
        />
        <button type="submit" className="todo-btn">Add ask</button>
    </form>
    )
}
export default TodoForm