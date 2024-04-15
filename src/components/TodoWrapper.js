import TodoForm from "./TodoForm"
import Todo from "./Todo";
import { useState } from "react"
import {v4 as uuidv4} from 'uuid';
uuidv4();

function TodoWrapper(){
    const [todos,setTodos] =useState([])

    function addTodo(todo){
        setTodos([...todos, {id:uuidv4(), task:todo, completed:false, isEditing:false}])
        // console.log(todos)
    }
    const toggleComplete = id => {
        setTodos(todos.map((todo)=>todo.id === id ? {...todo, completed: !todo.completed}:todo))
    }


    return(
       <div className="todowrapper">
            <TodoForm addTodo={addTodo}/>
            {todos.map((todo,index)=>(
                <Todo 
                task={todo} 
                key={index}
                toggleComplete={toggleComplete}
                />
            ))}
       </div>
    )
}
export default TodoWrapper