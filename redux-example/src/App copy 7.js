import React, { useCallback, useContext, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import useModal from 'antd/lib/modal/useModal';

function Test(props, ref) {
  useImperativeHandle(ref, () => {
    // 返回的值是current的值
    return {
      method() {
        console.log('test method');
      }
    };
  }, []);
  return <h1>test组件</h1>
}

const TestWrap = React.forwardRef(Test);

function App() {

  const ref = useRef();

  return (
    <div className="App">
      <TestWrap ref={ref} />
      <button onClick={() => {
        ref.current.method();
      }}>调用子组件方法</button>
    </div>
  );
}

export default App;
