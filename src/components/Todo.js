function Todo({task,toggleComplete}){
    return(
        <div className="todo">
            {/* If task.completed is true, it evaluates to 'completed', which sets the class name to 'completed'. */}
            <p onClick={()=>toggleComplete(task.id)}  className={`${task.completed ? 'completed':''}`}>{task.task}</p>
            <div>
                <button className="todo-btn">Edit</button>
                <button className="todo-btn">Delete</button>
            </div>
        </div>
    )
}
export default Todo;