"use Client"
import React from 'react'
import { useState,useEffect } from 'react'
const Navbar = () => {
    const [count, setcount] = useState(0)
  return (
    <div>
        The current count is {count}
        <button onClick={()=>{setcount(count + 1)}}>Click me </button>
    </div>
  )
}
export default Navbar