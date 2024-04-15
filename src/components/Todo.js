function Todo({task,toggleComplete, deleteTodo, editTodo}){
    return(
        <div className="todo">
            {/* If task.completed is true, it evaluates to 'completed', which sets the class name to 'completed'. */}
            <p onClick={()=>toggleComplete(task.id)}  className={`${task.completed ? 'completed':''}`}>{task.task}</p>
            <div>
                <button onClick={()=>editTodo(task.id)} className="todo-btn">Edit</button>
                <button onClick={()=> deleteTodo(task.id)} className="todo-btn">Delete</button>
            </div>
        </div>
    )
}
export default Todo;