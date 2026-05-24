import {useContext, useState} from 'react'
import { TrainingContext } from '../TrainingContext'
const WorkingContext = () => {
    const {currentSession} = useContext(TrainingContext)
    let current= ''
    if(currentSession == "morning"){
current = "This is the time of 45 morning walk"
    }
    else if (currentSession == "night"){
        current = "this is the time of 45 strength training"
    }
  return (
    <div>
        <h1>{current}</h1>
    </div>
  )
}

export default WorkingContext