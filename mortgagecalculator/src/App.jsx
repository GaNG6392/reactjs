import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [principle, setPrinciple] = useState(0);
  const [interest, setInterest] = useState(0);
  const [year, setYear] = useState(0);
  const [emi, setEmi] = useState(0);

  const handleChange = (e) => {
    const value = parseInt(e.target.value);
    const id = e.target.id;

    if (id === 'principle') {
      setPrinciple(value);
    } else if (id === 'interest') {
      setInterest(value);
    } else {
      setYear(value);
    }
  };
  //P(r(1+r)^n/((1+r)^n)-1)
  const calculateEMI = () => {
    let r = interest;
    r = r / 12 / 100;
    if (principle && r && year) {
      const calcPow = Math.pow(1 + r, year * 12);
      const amount = principle * ((r * calcPow) / (calcPow - 1));
      setEmi(Math.floor(amount));
    }
  };
  useEffect(() => {
    calculateEMI();
  }, [principle, interest, year]);

  return (
    <div className='loan-calc'>
      <h1>Mortgage Calculator</h1>
      <div className='inputs'>
        <p>Principle</p>
        <input onChange={handleChange} type='number' id='principle' />
        <p>Interest</p>
        <input onChange={handleChange} type='number' id='interest' />
        <p>Year</p>
        <input onChange={handleChange} type='number' id='year' />
      </div>
      <div className='output'>Your EMI is {emi}</div>
    </div>
  );
}

export default App;
