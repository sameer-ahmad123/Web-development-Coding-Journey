import React from 'react'
import Link from 'next/link'
import Script from 'next/script'
const Navbar = () => {
  return (
    
    <div className='h-28 w-screen bg-slate-700 text-white '>
        <Script strategy='lazyOnload' src="https://podcast-metrics.com/tracker.js"></Script>
        <ul className='flex gap-6 '>
           <Link href={"/"}><li>Home</li></Link>
           <Link href={"/episodes"}><li>Episodes</li></Link>
           <Link href={"/interviews"}><li>Interviews</li></Link>
        </ul>
    </div>
  )
}

export default Navbar