import React, { useState, useEffect } from 'react';

const ChatBar = ({ socket }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.on('newUserResponse', (data) => setUsers(data));
  }, [socket, users]);

  return (
    <div className='h-full border-gray-300 border-r border-solid flex-[0.2]'>
      <div className='min-h-[60px] max-h-[60px] bg-white p-2.5 flex flex-col justify-center border-gray-300 border-b border-solid '>
        <div className='flex items-baseline space-x-3'>
          <h2 className='text-lg font-medium text-gray-900'>Active</h2>
          <p className='text-sm font-medium text-gray-500'>
            {users?.length >= 1
              ? users.length + ' user'
              : users.length + ' users'}
          </p>
        </div>
      </div>
      <div class='flex flex-col px-4 py-2'>
        {users.map((user) => (
          <>
            <div class='min-w-0 flex-1 pt-1.5 flex justify-between space-x-4'>
              <div>
                <p key={user.socketID} class='text-sm text-green-500'>
                  {user.userName}
                </p>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default ChatBar;
