import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 todos: [{id: 1, text: "Hello "}]   //can be arrys, string,number,object
}
//now make a slice- reducer ka bada version
export const todoSlice = createSlice({
    name: "todo",
    initialState,  //ऊपर define किया है
    reducers: {
        addTodo: (state, action) => { //this state will give you the access  of the initial values present in the initialState. Means it will give the current situation of the state.
            state.todos.push(action.payload)    //in context API, we used to just define the function and not to wirte its defination
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
    }

})