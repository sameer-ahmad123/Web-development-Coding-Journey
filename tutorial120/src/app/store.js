import { configureStore } from '@reduxjs/toolkit';
// Import your existing counter (if you kept it)
import counterReducer from "../redux/counterSlice"; 
// Import your BRAND NEW workout drawer
import workoutReducer from "../redux/workoutSlice"; 
import portfolioReducer from "../redux/portfolioSlice"
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    workout: workoutReducer, 
    projects : portfolioReducer,
    
    // ✅ BOOM. It is now locked in the global vault!
  },
});