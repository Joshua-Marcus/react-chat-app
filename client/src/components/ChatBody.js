import React from 'react';
import { useNavigate } from 'react-router-dom';

const ChatBody = ({ messages, typingStatus, lastMessageRef }) => {
  const navigate = useNavigate();

  const handleLeaveChat = () => {
    localStorage.removeItem('userName');
    navigate('/');
    window.location.reload();
  };

  return (
    <>
      <header className='w-full min-h-[60px] max-h-[60px] flex items-center justify-between p-2.5 border-gray-300 border-b border-solid'>
        <h2 className='text-xl font-semibold'>Chat</h2>
        <button
          className='flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
          onClick={handleLeaveChat}
        >
          LEAVE CHAT
        </button>
      </header>

      <div className='w-full h-[80vh] bg-white p-10 overflow-y-scroll'>
        {messages.map((message) =>
          message.name === localStorage.getItem('userName') ? (
            <div key={message.id}>
              <p className='text-right text-sm'>You</p>
              <div className='bg-green-100 max-w-xs p-2.5 rounded-lg text-base ml-auto'>
                <p>{message.text}</p>
              </div>
            </div>
          ) : (
            <div key={message.id}>
              <p className='text-sm'>{message.name}</p>
              <div className='bg-orange-100 max-w-xs p-2.5 rounded-lg text-base'>
                <p>{message.text}</p>
              </div>
            </div>
          )
        )}

        <div className='fixed bottom-28 text-base italic'>
          <p>{typingStatus}</p>
        </div>
        <div ref={lastMessageRef} />
      </div>
    </>
  );
};

export default ChatBody;
