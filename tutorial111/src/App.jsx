import React, { useState } from 'react';

const DailyChecklist = () => {
  // We have two separate memory switches
  const [isWaterDone, setIsWaterDone] = useState(false);
  const [isWorkoutDone, setIsWorkoutDone] = useState(false);

  return (
    <div className="p-10">
      <h2 className="text-2xl mb-4">Daily Requirements</h2>
      
      {/* 🟢 TASK 1: Wire up this button to toggle 'isWaterDone' */}
      <button onClick={()=>{setIsWaterDone(!isWaterDone)}} className={`p-2 mt-3 border border-black mr-2 ${isWaterDone ? "bg-green-500" : "bg-gray-300"}`}>
        Gallon of Water
      </button>

      {/* 🟢 TASK 2: Wire up this button to toggle 'isWorkoutDone' */}
      <button onClick={()=>{setIsWorkoutDone(!isWorkoutDone)}} className={`p-2 border border-black  ${isWorkoutDone ? "bg-green-500" : "bg-gray-300"}`}>
        45 Min Workout
      </button>

    <h1>{isWaterDone && isWorkoutDone? "Stay Hard" : "Keep Pushing"}</h1>
      
    </div>
  );
}
export default DailyChecklist;