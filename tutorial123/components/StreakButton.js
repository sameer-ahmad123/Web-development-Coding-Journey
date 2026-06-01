"use client"
import React from 'react'
import { useState } from 'react'
const StreakButton = () => {
const [count, setcount] = useState(0)

  return (
    <div className='w-screen h-32 bg-amber-900 flex justify-center items-center text-2xl  gap-5 '>
        <div className='font-bold' >Current count = {count}</div>
        <button className='px-3.5 rounded-2xl bg-violet-600 text-white ' onClick={()=>{setcount(count+ 1)}}>Add count +1</button>
    </div>
  )
}

export default StreakButton