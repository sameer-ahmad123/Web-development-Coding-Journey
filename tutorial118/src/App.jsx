import {useRef,useEffect} from 'react'

const App = () => {
let repCount = useRef(0)
const logRep  = ()=>{
  repCount.current = repCount.current + 1
  console.log("Total reps : ",repCount.current)

}
  return (
    <div>
      <button onClick={logRep}>Add 1 rep</button>
    </div>
  )
}

export default App
