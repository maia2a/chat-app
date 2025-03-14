import React, { useState, useEffect } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

const Chat = ({ socket }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.emit('requestPreviousMessages'); //Request old messages from server

    //Receive old message from server
    socket.on('previousMessages', (prevMessages) => {
      console.log('Previous messages:', prevMessages);
      setMessages(Array.isArray(prevMessages) ? prevMessages : []);
    })

    //Receive new message from server
    socket.on('receiveMessage', (newMessage) => {
      console.log('New message:', newMessage);
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    })
  }, [socket]);

  const handleSendMessage = (message) => {
    socket.emit('sendMessage', message);
  }

  return (
    <div>
      <MessageList messages={messages} />
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
}

export default Chat;