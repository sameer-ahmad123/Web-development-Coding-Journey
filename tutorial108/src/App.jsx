import React, { useState, useEffect } from 'react';

const Workout = () => {
  const [pushups, setPushups] = useState(0);
  const [pullups, setPullups] = useState(0);

useEffect(() => {
  if(pullups > 0){
alert("Stay Hard !!!")
  }
}, [pullups])


  return (
    <div>
      <button onClick={() => setPushups(pushups + 1)}>Do Pushup</button>
      <button onClick={() => setPullups(pullups + 1)}>Do Pullup</button>
      <h1>The pushups are {pushups}</h1>
      <h1>The pullups are {pullups}</h1>
    </div>
  )
}
export default Workout
