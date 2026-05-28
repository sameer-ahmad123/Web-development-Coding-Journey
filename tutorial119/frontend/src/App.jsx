import React from 'react'
import { useForm } from 'react-hook-form'
const App = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = async data => {
    try{
      let response = await fetch("https://localhost:3000/"),
     {
      method : "POST",
      headers : {
        
      }
     }

    }
    catch(error){

    }
    console.log(data)
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
      <select className='border border-black' {...register("workout",{required : {value : true , message : "Please select catagory"}})}>
        <option value="Select">Select</option>
        <option value="Run">Morning Run</option>
        <option value="Strength">Night Strength Training</option>
      </select>
      {errors.workout && <div>{errors.workout.message}</div>}
      <input placeholder='Enter Water liters' className='border border-black'   {...register("liters", {required : {value  : true , message : "Please enter water liters"}})} type="number" />
      {errors.liters && <div>{errors.liters.message}</div>}
        <input type="submit" className='border border-black bg-violet-600 rounded-2xl' />
      </form>
    </div>
  )
}

export default App
