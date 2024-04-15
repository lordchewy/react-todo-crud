import TodoForm from "./TodoForm"
import Todo from "./Todo";
import EditTodoForm from "./EditTodoForm";
import { useState, useEffect } from "react"
import {v4 as uuidv4} from 'uuid';
uuidv4();

function TodoWrapper(){
    const [todos, setTodos] = useState([])

    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        setTodos(savedTodos);
    }, []);

    const addTodo = todo => {
        const newTodos = [...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}];
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    }

    const toggleComplete = id => {
        const newTodos = todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo);
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    }

    const deleteTodo = id => {
        const newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    }

    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
    }

    const editTask = (task, id) => {
        const newTodos = todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo);
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    }

    return(
       <div className="todowrapper">
            <TodoForm addTodo={addTodo}/>
            {todos.map((todo,index)=>(
                todo.isEditing ? (
                    <EditTodoForm editTask={editTask} todo={todo}/>
                ) :(
                    <Todo 
                    task={todo} 
                    key={index}
                    toggleComplete={toggleComplete}
                    deleteTodo = {deleteTodo}
                    editTodo={editTodo}
                    />
                )
            ))}
       </div>
    )
}
export default TodoWrapper



// const newTodo = { id: uuidv4(), task: todo, completed: false, isEditing: false };
// setTodos(updatedTodos);
// localStorage.setItem('todos', JSON.stringify(updatedTodos));