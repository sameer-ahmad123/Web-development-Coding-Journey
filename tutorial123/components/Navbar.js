import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className='h-20 w-screen bg-blue-950 flex justify-around items-center'>
        <div>Facebook</div>
    <ul className='flex gap-6'>
            <Link href="/"><li>Home</li></Link>
            <Link href="/about"><li>About</li></Link>
            <Link href="/contact"><li>Contact</li></Link>
      
        </ul>
    </div>
  )
}

export default Navbar