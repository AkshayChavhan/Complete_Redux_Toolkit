// this help to create a big object which we can use to track initial state of store and also reducer collected here
// >>> linking store and reducer
// nanoid is like uuid
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
}

export const todoSlice = createSlice({
    name: "todo", // name of the slice (reducer)
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
            }
            state.todos.push(todo);
        },
        removeTodo :(state ,action) =>{
            state.todos = state.todos.filter((todo)=>
            todo.id !== action.payload)
        }
    }
})


export const { addTodo , removeTodo } = todoSlice.actions ;

export default todoSlice.reducer

