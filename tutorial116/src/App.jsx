import {useContext,useState} from 'react'
import { TrainingContext } from './TrainingContext'
import WorkingContext from './components/WorkingContext'

const App = () => {
    const [currentSession, setcurrentSession] = useState("night")
  return (
   <TrainingContext.Provider value = {{currentSession , setcurrentSession}}>
<WorkingContext/>
   </TrainingContext.Provider>
  )
}

export default App
