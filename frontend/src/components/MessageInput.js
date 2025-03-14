import React, { useState } from "react";

const MessageInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() !== '') {
      onSendMessage({ username: 'User', text: message });
      setMessage('');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message here..."
        style={{ width: '100%', padding: '10px', marginTop: '10px' }}
      />
      <button type="submit">Send</button>
    </form>
  )
}

export default MessageInput;