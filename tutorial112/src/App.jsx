import {useState , useEffect,useRef} from 'react'


const App = () => {
const [habits, sethabits] = useState("")
const handleInput = (e)=>{
sethabits(e.target.value)
}
  return (
    <div  >
<input onChange={handleInput} type="text" className='border-2 border-black'  />
<button className='bg-gray-300 border border-black'>Log Habit</button>

    </div>
  )
}

export default App