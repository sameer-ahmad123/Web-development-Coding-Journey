import React from 'react'

const page = () => {
async function logShower(formData) {
  "use server"
  const temprature = Number(formData.get("waterTemprature"))
  const minutes = Number(formData.get("durationMinutes"))
  if(temprature > 15){
    console.log("Failed ! water was too warm")
  }
  else if(minutes < 5){
console.log("FAILED: You got out too early.")
  }
  else{
console.log("DISCIPLINE LOGGED: Shower survived.")
    
  }
}
  return (
    <div>
      <form action={logShower}>
        <input className='border border-white' type="text" name='waterTemprature'/>
        <input  className='border border-white' type="text" name='durationMinutes'/>
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default page