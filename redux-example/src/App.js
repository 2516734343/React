import React, { useState } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  const [count, setCount] = useState(1);
  const [visible, setVisible] = useState(true);
  return (
    <div className="App">
      {
        visible &&
        <div>
          <button onClick={() => setCount(count - 1)}>-</button>
          <span>{count}</span>
          <button onClick={() => {
            setCount(count => count + 1)
            setCount(count => count + 1)
          }}>+</button>
        </div>
      }
      <button onClick={() => setVisible(!visible)}>{visible ? '隐藏' : '显示'}</button>
    </div>
  );
}

export default App;
