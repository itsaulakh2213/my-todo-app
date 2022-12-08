import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { config, config2 } from "./Request";

const initialState = {
  message: null,
  loading: false,
  error: null,
  data: [],
};

export const getAllTodo = createAsyncThunk("getAllTodo", async () => {
  const res = await config2("/api/getAllTodo", "get");
  return res;
});

export const deleteTodo = createAsyncThunk("deleteTodo", async (id) => {
  const response = await config2(`/api/removeTodo/${id}`, "delete");
  return response;
});

export const createTodo = createAsyncThunk("createTodo", async (body) => {
  const response = await config("/api/createTodo", "post", body);
  return response;
});

export const editTodo = createAsyncThunk("editTodo", async (id, body) => {
  const response = await config(`/api/updateTodo/${id}`, "put", body);
  return response;
});

export const GetSingleTodo = createAsyncThunk("GetSingleTodo", async (id) => {
  const res = await config2(`/api/GetSingleTodo/${id}`, "get");
  return res;
});

const todoReducer = createSlice({
  name: "todo",
  initialState,
  extraReducers: {
    [createTodo.fulfilled]: (state, { payload: { error, message } }) => {
      state.loading = false;
      state.error = error;
      if (message) {
        state.message = message;
      }
    },
    [createTodo.pending]: (state) => {
      state.loading = true;
    },
    [getAllTodo.fulfilled]: (state, { payload: { message, data } }) => {
      state.loading = false;
      state.message = message;
      state.data = data;
    },
    [getAllTodo.pending]: (state) => {
      state.loading = true;
    },
    [deleteTodo.fulfilled]: (state, { payload: { message } }) => {
      state.loading = false;
      state.message = message;
    },
    [editTodo.fulfilled]: (state, { payload: { message } }) => {
      state.loading = false;
      state.message = message;
    },
    [editTodo.pending]: (state) => {
      state.loading = true;
    },
    [GetSingleTodo.fulfilled]: (state, { payload: { data } }) => {
      state.loading = false;
      state.data = data;
    },
    [GetSingleTodo.pending]: (state) => {
      state.loading = true;
    },
  },
});

export default todoReducer.reducer;
