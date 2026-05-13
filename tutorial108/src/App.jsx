import React, { useState , useEffect} from 'react';
const SavingsTracker = () => {
const [pound, setpound] = useState(0)
useEffect(() => {
if(pound >= 2000){
  alert("You can book the flight now")
}
}, [pound])
  return (
    <div>
    <button onClick={()=>setpound(pound +100)}>Add 100 pound</button>
    <h1>Your current savings are {pound}</h1>
<h2></h2>
    </div>
  )
}
export default SavingsTracker;