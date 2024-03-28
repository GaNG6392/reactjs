import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import FAQComp from './components/FAQComp';
import FAQItem from './components/FAQItem';

function App() {
  return (
    <>
      <div className='app'>
        <h1>Frequently asked question</h1>
        <div>
          <FAQComp />
          {/* <FAQItem /> */}
        </div>
      </div>
    </>
  );
}

export default App;
