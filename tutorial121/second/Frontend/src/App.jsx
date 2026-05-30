import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logWorkout,logCalories } from './redux/dailySlice'
const App = () => {

const workouts = useSelector((state)=> state.dailyRoutine.workout)
  const nutrition = useSelector((state)=>state.dailyRoutine.calories)
  const dispatch = useDispatch()
  const btnClick = ()=>{
dispatch(logWorkout());


  }
  const sendDataToBackend = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/sync', {
        method: 'POST', // We are sending data, not getting it
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          workouts: workouts, 
          nutrition: nutrition 
        }) // Packaging up the Redux data!
      });

      const result = await response.json();
      alert(result.message); // This will pop up on your screen if it works!

    } catch (error) {
      console.error("Failed to send data to server:", error);
    }
  }
  return (
    <div className='flex flex-col h-[50vh]  w-[60vw] justify-center items-center m-auto'>
      <div className='text-5xl text-white font-bold'>Iron Clad Discipline Tracker</div>
      <div className='text-2xl text-white '>Daily Training</div>
<div className="values flex ">
  <div>{workouts}/2</div>
</div>
<div className="btns flex gap-1.5">
  <button  className='border border-white bg-gray-400 px-2 text-black' onClick={()=>{btnClick()}}>Log Morinig Run </button>
  <button className='border border-white bg-gray-400 px-2 text-black' onClick={()=>{btnClick()}}>Log Night workout </button>
</div>
<div className='text-2xl text-white'>Surplus Calories Engine</div>
<div>{nutrition}</div>
<button  className='border border-white bg-gray-400 px-2 text-black' onClick={()=>dispatch(logCalories())}>Add 500+ Calories</button>
<button onClick={sendDataToBackend} className='border mt-2 border-white bg-gray-400 px-2 text-black' >Send data to Backend</button>
    </div>
  )
} 
export default App
