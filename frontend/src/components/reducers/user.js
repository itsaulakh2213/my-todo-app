import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    token: "",
    loading: false,
    message:"",
    error:""
}


const config = async (api, body) => {
    const res = await fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify(body),
    });
    return await res.json();
  };

export const RegisterUser = createAsyncThunk(
    'RegisterUser',
  (body) => {
      const response = config("/api/register", body)
      return response
    }
  )
export const LoginUser = createAsyncThunk(
    'LoginUser',
  (body) => {
      const response = config("/api/login", body)
      return response
    }
  )

const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers:{
    addToken: (state)=>{
      state.token = localStorage.getItem("token");
    },
    removeToken: (state)=>{
      state.token = null
      localStorage.removeItem("token");
    }
  },
  extraReducers: {
    [RegisterUser.fulfilled]:(state, {payload: {error, token, message}})=>{
        state.loading = false
        state.error = error
        if (message) {
            state.message = message;
            state.token = token;
            localStorage.setItem("token", token);
          } 
  },
    [RegisterUser.pending]:(state)=>{
        state.loading = true
       
  },
    [LoginUser.fulfilled]:(state, {payload: {error, token, message}})=>{
        state.loading = false
        state.error = error
        if (message) {
            state.message = message;
            state.token = token;
            localStorage.setItem("token", token);
          } 
  },
    [LoginUser.pending]:(state)=>{
        state.loading = true
       
  },
}

})

export const {addToken, removeToken} = userReducer.actions

export default userReducer.reducer