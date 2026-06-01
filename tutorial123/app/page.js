"use client"
import React, { useState } from 'react'
import Image from 'next/image'
const Page = () => {
const [isDayMode, setisDayMode] = useState(true)

  return (
    <div className='h-screen w-screen p-10'>
    {isDayMode  ? <div><Image width={600} height={400} src={"https://loremflickr.com/600/400/sun"}/></div> :<div><Image width={600} height={400} src={"https://loremflickr.com/600/400/moon"}/></div> }
    <button onClick={()=>{setisDayMode(!isDayMode)}}>{isDayMode? "Move to Night" : "Move to Day"}</button>
    </div>
  )
}

export default Page