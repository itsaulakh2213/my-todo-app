import { configureStore } from '@reduxjs/toolkit'
import userReducer from './components/reducers/user'

export const Store = configureStore({
  reducer: {
    user:userReducer
  },
  middleware: (getDefaultMiddleware)=> getDefaultMiddleware()
})