import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
  
    <div className='size-80 bg-amber-700 relative'>
 
<Image fill = {true} src={"https://loremflickr.com/500/500/space"} alt="Space Mission Placeholder" className="mx-auto object-cover" ></Image>
    </div>
  )
}

export default page
export const metadata = {
  title: "Home Page | Data related to contact is present here",
  description: "This is contact page of facebook",
};