import React, { useCallback, useContext, useDebugValue, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import useModal from 'antd/lib/modal/useModal';


function useTest() {
  const [n, setN] = useState(10);
  useDebugValue(n);
  return n;

}

function App() {
  const [n, setN] = useState(10);
  const ref = useRef();

  useEffect(() => {

    ref.current.innerText = n;
  })

  return (
    <div className="App">
      <h1 ref={ref}></h1>
      <button onClick={(e) => {
        setN(n + 1);
      }}>调用子组件方法</button>
    </div>
  );
}

export default App;
