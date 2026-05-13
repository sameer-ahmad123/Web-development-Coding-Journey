import React from "react"
import "./SongCard.css"
const SongCard = ({title,artist,streams}) => {
  return (
    <div>
      <h3>title = {title} Artist = {artist} Streams = {streams}</h3>
    </div>
  )
}
export default SongCard
