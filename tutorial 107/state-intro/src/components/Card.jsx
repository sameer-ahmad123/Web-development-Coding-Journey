import React from 'react'
import "./Card.css"
const Card = ({score,wickets}) => {
  return (
    <div>
      <h1>Score =  {score} Wickets = {wickets}</h1>
     
    </div>
  )
}

export default Card
