import { createSlice } from '@reduxjs/toolkit';

// 1. Define the starting data
const initialState = {
  totalWorkouts: 0,
  currentStatus: "Resting",
  diet : "Not yet",
calories : 0
};

export const workoutSlice = createSlice({
  name: 'workout',
  initialState,
  reducers: {
    // Action 1: Add a 45-minute session
    logSession: (state) => {
      state.totalWorkouts += 1;
      state.currentStatus = "Training Complete";
    },
    logDiet: (state) => {
     
      state.diet = "Eaten";
    },
    logCalories: (state,action) => {
     
      state.calories += action.payload;
    },
    // Action 2: Reset for the next day
    resetDay: (state) => {
      state.totalWorkouts = 0;
      state.currentStatus = "Resting";
      state.diet = "Not yet";
    }
  }
});

// 2. Export the Actions so your buttons can use them
export const { logSession, resetDay ,logDiet,logCalories} = workoutSlice.actions;

// 3. Export the Reducer so the Store can lock it in the vault
export default workoutSlice.reducer;