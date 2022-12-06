import { configureStore } from '@reduxjs/toolkit'
import userReducer from './components/reducers/user'
import todoReducer from './components/reducers/todo'
import myTodoReducer from './components/reducers/mytodo'

export const Store = configureStore({
  reducer: {
    user:userReducer,
    todo:todoReducer,
    mytodo:myTodoReducer
  },
  middleware: (getDefaultMiddleware)=> getDefaultMiddleware()
})