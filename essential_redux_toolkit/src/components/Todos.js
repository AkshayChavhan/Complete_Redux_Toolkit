import React from 'react';
import { useSelector } from "react-redux"; //to read data
import { useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";


function Todos() {

    const todos = useSelector(state => state.todos);

    const dispatch = useDispatch();
    console.log("todos => ", todos);
    return (
        <>
            <div>Todos</div>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <div>{todo.text}</div>
                        <button 
                        onClick={()=> dispatch(removeTodo(todo.id))}>Delete</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Todos