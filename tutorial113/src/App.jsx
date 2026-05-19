import {useState} from 'react'

const App = () => {
const [exam, setExam] = useState({ 
  subject: "Database Management", 
  targetMarks: 85, 
  currentPrep: 50 
})

  return (
    <div className='flex flex-col justify-center items-center w-screen h-screen'>
      <div className="card border border-black">
        <ul>
        <li>Subject : {exam.subject}</li>
        <li>Target Marks : {exam.targetMarks}</li>
        <li>Current Prep : {exam.currentPrep}</li>
        </ul>
      </div>
      <div >Enter Target Marks</div>
        <input onChange={(e)=>setExam({...exam ,targetMarks : e.target.value })} className='border border-black' placeholder='Update Target Marks' type="text" />
        <div>Enter current prep</div>
        <input  onChange={(e)=>setExam({...exam ,currentPrep : e.target.value })} className='border border-black' placeholder='Update current Prep' type="text" />
    </div>
  )
}

export default App
