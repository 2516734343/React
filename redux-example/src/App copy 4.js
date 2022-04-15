import React, { useCallback, useContext, useEffect, useState } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

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
  const handleClick = useCallback(() => setTxt(txt + 1), [txt])
  return <div>
    {/* 重新渲染时，函数地址发生了变化，会导致子组件重新渲染 */}
    <Test value={txt} onClick={() => setTxt(123)} />
  </div>
}

function App() {


  return (
    <div className="App">
      <Parent />
    </div>
  );
}

export default App;
