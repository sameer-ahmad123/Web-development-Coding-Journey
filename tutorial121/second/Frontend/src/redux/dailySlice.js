import { createSlice } from '@reduxjs/toolkit'

const initialState = {
workout : 0,
 calories : 0

}

export const dailyRoutine = createSlice({
  name: 'dailyRoutine',
  initialState,
  reducers: {
   logWorkout : (state )=>{
state.workout += 1
   },
  logCalories : (state)=>{
    state.calories += 500 
  }
  },
})

// Action creators are generated for each case reducer function
export const { logWorkout, logCalories } = dailyRoutine.actions

export default dailyRoutine.reducer