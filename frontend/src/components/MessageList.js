import React from "react";

const MessageList = ({ messages }) => {
  if (!Array.isArray(messages)) {
    console.error('Messages is not an array', messages);
    return null;
  }
  return (
    <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
      {messages.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '10px' }}>No messages</div>
      ) : (
        messages.map((message, index) => (
          <div key={index} style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
            <strong>{message.username || 'Unknown User'}</strong>: {message.text || '[No text]'}
          </div>
        ))
      )}
    </div>
  )
}

export default MessageList;