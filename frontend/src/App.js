import React from 'react';
import io from 'socket.io-client';
import Chat from './components/Chat';

const socket = io('http://localhost:5000');

function App() {
  return (
    <div className='App'>
      <h1>Chat App</h1>
      <Chat socket={socket} />
    </div>
  )
}

export default App;