import { configureStore } from '@reduxjs/toolkit'
import  dailyRoutineReducer  from './dailySlice'

export const store = configureStore({
   reducer: {
    dailyRoutine: dailyRoutineReducer,
  },
})