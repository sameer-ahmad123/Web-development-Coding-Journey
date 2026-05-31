"use client"
import React from 'react'

const BoostButtons = () => {
    const [count, setcount] = useState(0)
  return (
    <div>
<button onClick={()=>{setcount(count+ 1)}}>Click me </button>
    </div>
  )
}

export default BoostButtons
