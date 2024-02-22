import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
function github() {
  const data = useLoaderData();

  // const { userId } = useParams();
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch(`https://api.github.com/users/${userId}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);
  return (
    <div className=' bg-gray-600'>
      <div className='bg-gray-700 text-white text -3xl text-center p-4'>
        Github followers : {data.followers}
      </div>
      <div className='flex justify-center mx-3'>
        <div>
          <img
            src={data.avatar_url}
            alt=''
            className='item-center p-4 rounded-full w-1/2 h-full'
          />
        </div>
        <div className=' flex justify-end py-8 text-2xl h-full'>
          <ul>
            <li>User Id : {data.login}</li>
            <li>User Name : {data.name}</li>
            <li>User Repos : {data.public_repos}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default github;

export const githubInfoLoader = async () => {
  const response = (
    await fetch('https://api.github.com/users/GaNG6392')
  ).json();
  return response;
};
