import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import useModal from 'antd/lib/modal/useModal';

class Test extends React.PureComponent {

  render() {
    console.log('test render')
    return <div>
      <div>{this.props.value}</div>
      <button onClick={this.props.onClick} >改变文本</button>
    </div>
  }
}

function Parent() {

  const [txt, setTxt] = useState(123);
  console.log('parent render');
  const handleClick = useMemo(() => {
    return () => {
      setTxt(txt + 1);
    }
  }, [txt])
  return <div>
    {/* 重新渲染时，函数地址发生了变化，会导致子组件重新渲染 */}
    <Test value={txt} onClick={handleClick} />
  </div>
}

function App() {


  const [n, setN] = useState(10);

  const ref = useRef();

  const timerRef = useRef();

  const nRef = useRef(20); // {current: 20}

  // useEffect(() => {
  //   if (n === 0) {
  //     return;
  //   }
  //   timerRef.current = setTimeout(() => {
  //     setN(n - 1);
  //   }, 1000);
  //   return () => {
  //     clearTimeout(timerRef.current);
  //   }
  // }, [n])

  useEffect(() => {

    const timer = setInterval(() => {
      nRef.current--;
      setN(nRef.current);
      if (nRef.current === 0) {
        clearInterval(timer);
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    }
  }, [])


  function handleClick() {
    console.log(ref.current.value);
  }

  return (
    <div className="App">
      <h2>{n}</h2>
      <h2>{nRef.current}</h2>
      <input ref={ref}></input>
      <button onClick={() => handleClick()}>点击</button>
    </div>
  );
}

export default App;
