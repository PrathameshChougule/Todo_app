import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    todos: [
        {
            id: 1,
            text: "hello world",
            completed: false
        }
    ]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                completed: false
            }
            state.todos.push(todo)
        },

        removeTodo: (state, action) => {
            console.log(action);
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },

        updateTodo: (state, action) => {
            console.log(state);
            console.log(action);
            state.todos = state.todos.map((todo) => (todo.id === action.payload.id ? action.payload : todo))
            console.log(state.todos);
            
        },

        toggleComplete: (state, action) => {
            console.log(action.payload);
            state.todos = state.todos.map((todo) => (todo.id === action.payload.id ? action.payload : todo))
        }
    }
})

export const {addTodo, removeTodo, updateTodo, toggleComplete} = todoSlice.actions

export default todoSlice.reducer