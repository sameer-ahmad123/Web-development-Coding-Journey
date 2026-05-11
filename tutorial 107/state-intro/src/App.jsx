import React, {useState} from 'react'
import Card from './components/Card'
const App = () => {
const [score , setScore] = useState(0)
const [wickets , wicketcounter] = useState(0)

  return (
    
    <div>
      <div className='btns'>
 <button onClick={()=>{setScore (score +1)} }>Add Score</button>
 <button onClick={()=>{wicketcounter (wickets +1)}}>Add wickets</button>
 </div>
<Card score={score} wickets={wickets} />

    </div>
  )
}

export default App
