import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
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

  const [range,] = useState({ min: 1, max: 10000 });

  const list = useMemo(() => {
    const list = [];
    for (let i = range.min; i < range.max; i++) {
      list.push(<li key={i}>{i}</li>);
    };
    return list;
  }, [range.min, range.max])



  return (
    <div className="App">
      <ul>
        {list}
      </ul>
    </div>
  );
}

export default App;
