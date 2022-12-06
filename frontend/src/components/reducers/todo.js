import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState ={
    loading: false,
    message:"",
    error:""
}


const config = async (api, body) => {
    const res = await fetch(api, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem("token"),
      },
      body: JSON.stringify(body),
    });
    return await res.json();
  };


export const createTodo = createAsyncThunk(
    'RegisterUser',
  (body) => {
      const response = config("/api/createTodo", body)
      return response
    }
  )

const todoReducer = createSlice({
  name: 'todo',
  initialState,
  extraReducers: {
    [createTodo.fulfilled]:(state, {payload: {error, message}})=>{
        state.loading = false
        state.error = error
        if (message) {
            state.message = message;
          } 
  },
    [createTodo.pending]:(state)=>{
        state.loading = true
       
  },   
}

})

export default todoReducer.reducer