import { useState } from 'react';

import './App.css';
import Card from './components/Card';
function App() {
  let myObj = {
    username: 'ramm',
    age: 28,
  };

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl m-5'>
        Tail wind test
      </h1>
      <Card channel='RaMM' textBtn='Click Me' />
      <Card channel='Ganga' textBtn='Visit Me' />
    </>
  );
}

export default App;
