import React from 'react'
import { useState,useEffect,useRef } from 'react';
const App = () => {
  const [score, setscore] = useState(0)
  const ref  = useRef()
  let totalScore = 10;
  useEffect(() => {
   if(score >= 10){
    alert("Whoo!...Babar won the match")
    ref.current.play()
   }
  }, [score])
  return (
    <div>
      <h3>Your current score is {score}</h3>
     <audio ref={ref} src="./assets/voice.mp3"></audio>
      <button onClick={()=>{setscore(score+1)}}>Add Score</button>
    </div>
  )
}
export default App
