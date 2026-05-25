import React from 'react'
import { useContext } from 'react'
import { ExamContext } from '../ExamContext'
const StudyTracker = () => {
    const {chapterRevised , setchapterRevised} = useContext(ExamContext)
  return (
    <div>
        <button className='border border-black' onClick={()=>{setchapterRevised(chapterRevised +1)}}>Mark Chapter complete</button>
        <div>chapter reviesed are = {chapterRevised}</div>
        
    </div>
  )
}

export default StudyTracker