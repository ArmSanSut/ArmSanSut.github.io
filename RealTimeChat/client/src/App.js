import './App.css';
import { io } from 'socket.io-client';
import React, { useState } from 'react';
import Chat from './chat';

const socket = io.connect("http://localhost:3001");

function App() {
  const [user, setUser] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (user !== "" && room !== "") {
      socket.emit("join_room", room)
      setShowChat(true);
    }
  };

  return (
    <div className="App">
      {!showChat ?
        (<div className="joinChatContainer">
          <h3>Join The Chat</h3>
          <input
            type="text"
            placeholder="Inarm..."
            onChange={(e) => { setUser(e.target.value) }}
          />
          <input
            type="text"
            placeholder="Room ID"
            onChange={(e) => { setRoom(e.target.value) }}
          />
          <button
            onClick={joinRoom}
          > JOIN A ROOM </button>
        </div>
        ) : (
          <Chat socket={socket} user={user} room={room} />
        )
      }


    </div>
  );
}

export default App;
