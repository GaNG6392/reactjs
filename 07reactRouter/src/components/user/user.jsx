import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
  const { userId } = useParams();
  return (
    <div className='bg-gray-700 p-5 text-4xl text-white'>
      {' '}
      UserName : {userId}
    </div>
  );
}

export default User;
