"use client"
import React from 'react'
import { useState } from 'react'
const Page = () => {
  const [workout, setworkout] = useState('')
  const [waterLiters, setwaterLiters] = useState(0)
  const [diet, setdiet] = useState('')
  const handlebtn = async()=>{
let data = {Workout : workout , Liters : waterLiters , Diet : diet }
let a = await fetch("/api/add",{method : "POST",headers : {
  "Content-Type" : "application/json",
},
body : JSON.stringify(data),
}
)
let res = await a.json()
console.log(res)
  }
  return (
    <div className='h-[75vh] w-[45vw] border border-white mx-auto flex flex-col justify-center items-center gap-6' >
      <div className='flex flex-col gap-3.5 justify-baseline h-auto w-auto'>
        <div className='flex justify-between'>
          <label className='font-bold text-2xl' >Workout : </label>
          <input value={workout} onChange={(e)=>{setworkout(e.target.value)}} type="text" className='bg-slate-600 border-white w-60 h-10 ' />
        </div>
        <div className='flex justify-between'>
          <label className='font-bold text-2xl' >Water : </label>
          <input value={waterLiters} onChange={(e)=>{setwaterLiters(e.target.value)}} type="number" className='bg-slate-600 border-white w-60 h-10 ' />
        </div>
        <div className='flex justify-between'>
          <label className='font-bold text-2xl' >Diet : </label>
          <input value={diet} onChange={(e)=>{setdiet(e.target.value)}} type="text" className='bg-slate-600 border-white w-60 h-10 ' />
        </div>
      </div>
      <div>
        <button className='px-4 py-1.5 hover:cursor-pointer transition-all duration-300 hover:scale-105 bg-violet-600 text-white rounded-2xl' onClick={handlebtn}>Submit Todays Log</button>
      </div>
    </div>
  )
}

export default Page