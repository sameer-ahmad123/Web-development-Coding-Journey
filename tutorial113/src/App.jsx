import {useState} from 'react'
const App = () => {
const [matchStats, setmatchStats] = useState({ runs: 0, wickets: 0, balls: 0 })
const handleSingle = ()=>{
  setmatchStats({
    ...matchStats,runs:matchStats.runs +1,balls:matchStats.balls +1
   
  })
  
}
const handleFour = ()=>{
  setmatchStats({
    ...matchStats,runs:matchStats.runs +4,balls:matchStats.balls +1
   
  })
  
}
const handleDot = ()=>{
  setmatchStats({
    ...matchStats,balls:matchStats.balls +1
   
  })
  
}
const handleWicket = ()=>{
  setmatchStats({
    ...matchStats,wickets:matchStats.wickets +1,balls:matchStats.balls +1
   
  })
  
}

  return (
    <div className='h-screen w-screen '>
<nav className='h-24 w-full bg-amber-800 flex justify-center items-center'>
  <ul className='flex gap-32 text-white'>
    <li className='font-extrabold text-5xl'>Runs : {matchStats.runs}</li>
    <li className='font-extrabold text-5xl'>Wickets : {matchStats.wickets}</li>
    <li className='font-extrabold text-5xl'>Balls : {matchStats.balls}</li>
  </ul>
</nav>
<div className='h-24 w-full text-white bg-cyan-950 flex justify-center items-center gap-10'>
  
  <button onClick={handleSingle} className='bg-violet-600 border border-black rounded-xl px-6 py-2 font-bold hover:bg-violet-700 transition-all hover:scale-105'>
    Add +1
  </button>
  
  <button onClick={handleFour} className='bg-violet-600 border border-black rounded-xl px-6 py-2 font-bold hover:bg-violet-700 transition-all hover:scale-105'>
    Add +4
  </button>
  
  <button onClick={handleDot} className='bg-violet-600 border border-black rounded-xl px-6 py-2 font-bold hover:bg-violet-700 transition-all hover:scale-105'>
    Dot Ball
  </button>
  
  <button onClick={handleWicket} className='bg-red-600 border border-black rounded-xl px-6 py-2 font-bold hover:bg-red-700 transition-all hover:scale-105'>
    Wicket!
  </button>

</div>
    </div>
  )
}
export default App
