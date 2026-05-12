import React from 'react'
import { useEffect } from 'react'
const Navbar = ({color}) => {
useEffect(() => {
  

  return () => {
   alert("Hey the navbar is mounted") 
  }
}, [])

    
  return (
    <div>
      <h3>I am Navbar with color {color}</h3>
    </div>
  )
}

export default Navbar
