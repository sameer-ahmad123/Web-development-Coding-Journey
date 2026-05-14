import React, { useState, useRef, useEffect } from 'react';

const StudyStation = ({subject}) => {
  const [notes, setNotes] = useState("sameer");
  const ref = useRef()
useEffect(() => {
 ref.current.focus()
})


  return (
    <div>
      <h2>Currently Studying: {`Subject : ${subject}`}</h2>
      
     
      <input ref={ref} type="text" placeholder="Start typing notes..." />
      
      <p>Live Notes: {notes}</p>
    </div>
  );
}
export default StudyStation;