import { createSlice } from "@reduxjs/toolkit";

// Initial state with one todo
const initialState = {
  todos: [{ id: 1, text: "Todo " }]  // Initial todo with a unique id
};

// Create a slice with reducers
export const todoSlice = createSlice({
  name: "todo",  // Name of the slice
  initialState,  // Set the initial state
  reducers: {
    // Reducer to add a new todo
    addTodo: (state, action) => {
        // Simplified unique id generation based on the array length
        const newId = state.todos.length + 1;
      
        // Add the new todo with the generated unique id
        state.todos.push({    // Why this push method?- to add it in the array
          id: newId,         // The unique id for the new todo
          text: action.payload // The text of the new todo from the payload
        });
      },

    // Reducer to remove a todo by its id
    removeTodo: (state, action) => {
      // Filter out the todo with the id that matches the payload (the id to remove)
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    }
  }
});

// Export the actions for use in components
export const { addTodo, removeTodo } = todoSlice.actions;

// Export the reducer to be used in the store
export default todoSlice.reducer;
