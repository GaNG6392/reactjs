import { useState } from 'react';
import reactLogo from './assets/react.svg';
import AddTodos from './components/addTodos';
import Todos from './components/todos';
import './App.css';

function App() {
  return (
    <>
      <div>
        <h1> redux react tool kit</h1>
        <AddTodos />
        <Todos />
      </div>
    </>
  );
}

export default App;
