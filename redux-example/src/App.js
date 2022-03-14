import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

const ref = React.createRef();
let timer = null;
let curTimes = 0;
function MoveBlock(props) {
  useEffect(() => {
    clearInterval(timer);
    const div = ref.current;
    const disX = props.left / 100;
    const disY = props.top / 100;
    timer = setInterval(() => {
      curTimes++;
      const newLeft = disX * curTimes;
      const newTop = disY * curTimes;
      div.style.left = newLeft + "px";
      div.style.top = newTop + "px";
      if (curTimes === 100) {
        clearInterval(timer);
      }
    }, 10);
    return () => {
      console.log('清理函数')
    }
  }, [props.left, props.top]);

  return <div style={{
    width: 100,
    height: 100,
    backgroundColor: 'red',
    left: props.left,
    top: props.top,
  }} ref={ref}></div>
}
function App() {
  const [point, setPoint] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(true);

  return (
    <div className="App">
      x: <input value={point.x} onChange={e => {
        setPoint({
          ...point,
          x: parseInt(e.target.value)
        })
      }} />
      y: <input value={point.y} onChange={e => {
        setPoint({
          ...point,
          y: parseInt(e.target.value)
        })
      }} />


      <MoveBlock left={point.x} top={point.y} />
    </div>
  );
}

export default App;
