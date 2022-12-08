import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { config, config2 } from "./Request";

const initialState = {
  token: "",
  loading: false,
  message: "",
  error: "",
  data: [],
};

export const UserDetail = createAsyncThunk("UserDetail", async () => {
  const res = await config2("/api/userDetail", "get");
  return res;
});

export const RegisterUser = createAsyncThunk("RegisterUser", async (body) => {
  const response = await config("/api/register", "post", body);
  return response;
});
export const LoginUser = createAsyncThunk("LoginUser", async (body) => {
  const response = await config("/api/login", "post", body);
  return response;
});

const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    addToken: (state) => {
      state.token = localStorage.getItem("token");
    },
    removeToken: (state) => {
      state.token = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: {
    [UserDetail.fulfilled]: (state, { payload: { message, data } }) => {
      state.loading = false;
      state.message = message;
      state.data = data;
    },
    [UserDetail.pending]: (state) => {
      state.loading = true;
    },
    [RegisterUser.fulfilled]: (
      state,
      { payload: { error, token, message } }
    ) => {
      state.loading = false;
      state.error = error;
      if (message) {
        state.message = message;
        state.token = token;
        localStorage.setItem("token", token);
      }
    },
    [RegisterUser.pending]: (state) => {
      state.loading = true;
    },
    [LoginUser.fulfilled]: (state, { payload: { error, token, message } }) => {
      state.loading = false;
      state.error = error;
      if (message) {
        state.message = message;
        state.token = token;
        localStorage.setItem("token", token);
      }
    },
    [LoginUser.pending]: (state) => {
      state.loading = true;
    },
  },
});

export const { addToken, removeToken } = userReducer.actions;

export default userReducer.reducer;
