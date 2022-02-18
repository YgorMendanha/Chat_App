import { useState, useEffect } from 'react'
import io from 'socket.io-client'
import Chat from './components/Chat'
import './App.css'

const socket = io.connect('http://localhost:8080')

function App() {
  const [username, setUserName] = useState("")
  const [room, setRoom] = useState("")
  const [userlogin, setUserlogin] = useState(false
    )

  const joinroom = ()=>{
    if(username !== "" && room !== ""){
      socket.emit("join_room",room)
      setUserlogin(true)
    }
  }

  return (
    <div>
      {userlogin === false ? (
        <div className="login">
          <p>Escolha um User e uma Sala!</p>
          <input type="text" placeholder="User..."  onChange={(e)=>{setUserName(e.target.value)}}/>
          <input type="text" placeholder="Sala..." onChange={(e)=>{setRoom(e.target.value)}}/>
          <button onClick={joinroom}>Entar</button>
        </div>

      ):(  
        <div>          
          <Chat socket={socket} username={username} room={room}/>
        </div>      
      )}
    </div>
  )
}

export default App
