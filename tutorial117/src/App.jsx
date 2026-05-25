import React from 'react'
import { useContext,useState } from 'react'
import { ExamContext } from './ExamContext'
import StudyTracker from './components/StudyTracker'
const App = () => {
  const [chapterRevised, setchapterRevised] = useState(0)
  return (
    <ExamContext.Provider value={{chapterRevised , setchapterRevised}}>
<StudyTracker/>
    </ExamContext.Provider>
  )
}

export default App