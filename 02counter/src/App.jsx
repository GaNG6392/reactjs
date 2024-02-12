import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  //  let counter = 5;
  let [counter, setCounter] = useState(0);

  const increasevalue = () => {
    if (counter <= 19) {
      setCounter(counter + 1);
    }
  };
  const decreasevalue = () => {
    if (counter != 1) {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <h1> chai aur react</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={increasevalue}>Increase value</button>
      <br />
      <button onClick={decreasevalue}>Decrease value</button>
    </>
  );
}

export default App;
