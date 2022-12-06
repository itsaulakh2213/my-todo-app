
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState ={
  message:null,
  loading:false,
  error: null,
  data : [],
}


const config2 = async (api, type) => {
    const res = await fetch(api, {
      method: type,
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem('token')
      },
    });
    return await res.json();
  };


export const getAllTodo = createAsyncThunk(
    'getAllTodo',
  async() => {
      const res = await config2("/api/getAllTodo", "get" )
      return res
    }
  )

export const deleteTodo = createAsyncThunk(
    'deleteTodo',
  (id) => {
      const response = config2( `/api/removeTodo/${id}`, "delete" )
      return response
    }
  )


const myTodoReducer = createSlice({
  name: 'mytodo',
  initialState,
  extraReducers: {
    [getAllTodo.fulfilled]:(state, {payload:{message, data}})=>{
        state.loading = false
        state.message = message
        state.data = data
    },  
    [getAllTodo.pending]:(state)=>{
        state.loading = true
  },
    [deleteTodo.fulfilled]:(state, {payload:{message}})=>{
        state.loading = false
       state.message= message
  },
    
}

})



export default myTodoReducer.reducer