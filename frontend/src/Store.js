import { configureStore } from '@reduxjs/toolkit'
import userReducer from './components/reducers/user'
import todoReducer from './components/reducers/todo'

export const Store = configureStore({
  reducer: {
    user:userReducer,
    todo:todoReducer,
  },
  middleware: (getDefaultMiddleware)=> getDefaultMiddleware()
})