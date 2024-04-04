import { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState(0);
  const [history, setHistory] = useState([]);
  const [reduList, setReduList] = useState([]);
  const [unduCount, setUnduCount] = useState(0);

  const manageHistory = (key, prev, curr) => {
    const obj = {
      actionKey: key,
      prev,
      curr,
    };
    const copyHistory = [...history];
    copyHistory.unshift(obj);
    setHistory(copyHistory);
  };

  const handleClick = (key) => {
    const val = parseInt(key);
    setValue((prev) => prev + val);
    manageHistory(key, value, value + val);
  };
  const handleUndo = () => {
    if (history.length) {
      if (unduCount + 1 > 5) {
        alert('You cant undu beyound limit =5');
        return;
      }
      const copyHist = [...history];
      const firstItem = copyHist.shift();
      setHistory(copyHist);
      setValue(firstItem.prev);

      const copyReduList = [...reduList];
      copyReduList.push(firstItem);
      setReduList(copyReduList);
    }
  };
  const handleRedo = () => {
    if (reduList.length) {
      const copyReduList = [...reduList];
      const popedValue = copyReduList.pop();
      setReduList(copyReduList);
      const { actionKey, prev, curr } = popedValue;
      setValue(curr);
      manageHistory(actionKey, prev, curr);
    }
  };
  return (
    <>
      <div className='head'>
        <h1> Undoable Counter</h1>
      </div>
      <div className='undo'>
        <button onClick={handleUndo} className='redo'>
          Undo
        </button>
        <button onClick={handleRedo} className='redo'>
          Redo
        </button>
      </div>
      <div className='main'>
        <div>
          {[-100, -10, -1].map((btn) => (
            <button onClick={() => handleClick(btn)}>{btn}</button>
          ))}
        </div>
        <div className='inputbox'>{value}</div>
        <div>
          {['+1', '+10', '+100'].map((btn) => (
            <button onClick={() => handleClick(btn)}>{btn}</button>
          ))}
        </div>
      </div>

      <div className='history'>
        {history.map((item) => {
          return (
            <div className='row'>
              <div>{item.actionKey}</div>
              <div>{`[${item.prev} -> ${item.curr}]`}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
