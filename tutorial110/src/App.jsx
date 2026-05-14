import React, { useState } from 'react';

const Playlist = () => {
  // The memory switch for the filter
  const [showOnlySidhu, setShowOnlySidhu] = useState(false);

  const songs = [
    { id: 1, title: "295", artist: "Sidhu Moose Wala" },
    { id: 2, title: "Excuses", artist: "AP Dhillon" },
    { id: 3, title: "The Last Ride", artist: "Sidhu Moose Wala" },
    { id: 4, title: "Levels", artist: "Sidhu Moose Wala" }
  ];

  return (
    <div style={{ padding: "20px", backgroundColor: "#111", color: "white" }}>
      <h2>My Playlist</h2>
      
      {/* 🟢 1. WIRE THIS BUTTON to toggle 'showOnlySidhu' */}
      <button>
        {showOnlySidhu ? "Show All Songs" : "Show Only Sidhu Moose Wala"}
      </button>

      <ul>
        {songs.map((song) => {
          // 🟢 2. THE BOUNCER LOGIC
          // Write an 'if' statement right here before the return!
          // IF showOnlySidhu is true AND song.artist is NOT "Sidhu Moose Wala", 
          // return 'null' (which tells React to hide this specific <li>).
          
          return (
            <li key={song.id} style={{ margin: "10px 0" }}>
              {song.title} - {song.artist}
            </li>
          )
        })}
      </ul>
    </div>
  );
}
export default Playlist;