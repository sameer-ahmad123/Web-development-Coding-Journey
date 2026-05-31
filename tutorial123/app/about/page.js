import React from 'react'

const page = () => {
    return (
        <div className='text-white '>
            <h1 className='m-auto w-full h-20 flex justify-center items-center text-2xl font-bold '>About myself</h1>
            <div className='flex justify-center items-center flex-col'>
                <div className="name flex">
                    <div>Name : </div>
                    <div>Sameer</div>
                </div>
                <div className="age flex">
                    <div>Age : </div>
                    <div>19.6 </div>
                </div>
                <div className="gender flex">
                    <div>Gender : </div>
                    <div>Male</div>
                </div>
            </div>
        </div>
    )
}

export default page
export const metadata = {
  title: "About Page | Data related to contact is present here",
  description: "This is contact page of facebook",
};