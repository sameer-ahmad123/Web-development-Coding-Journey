import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
const Login = () => {
const [password, setpassword] = useState('')
const navigate = useNavigate()
const handleLogin = ()=>{
  if(password === "sigma123"){
    navigate("/home")
  }
  else{
    alert("Wrong password")
  }
}
  return (
    <div className='h-screen w-screen flex justify-center items-center flex-col gap-5 '>
      <input value={password} onChange={(e) => { setpassword(e.target.value) }} className='border border-black rounded-2xl px-3 py-1.5' placeholder='Enter password' type="password" />
      <button onClick={handleLogin} className='bg-violet-600 text-white rounded-2xl px-3 py-1.5'>Login</button>
    </div>
  )
}

export default Login
