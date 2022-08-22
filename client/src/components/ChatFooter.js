import React, { useState } from 'react';

const ChatFooter = ({ socket }) => {
  const [message, setMessage] = useState('');
  const handleTyping = () =>
    socket.emit('typing', `${localStorage.getItem('userName')} is typing`);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() && localStorage.getItem('userName')) {
      socket.emit('message', {
        text: message,
        name: localStorage.getItem('userName'),
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id,
      });
    }
    setMessage('');
  };
  return (
    <div className='p-2.5 h-[10vh] border-solid border-gray-300 border-t'>
      <form
        className='w-full h-full grid grid-cols-6 gap-3 items-end'
        onSubmit={handleSendMessage}
      >
        <input
          type='text'
          placeholder='Write message'
          className='col-span-5 h-full rounded-lg border-gray-300 p-2.5'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleTyping}
        />
        <button className='col-span-1 h-3/4 flex items-center justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'>
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatFooter;
