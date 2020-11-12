import React from 'react';
import logo from './logo.svg';
import './App.css';
import Ref from "./components/ref/Ref";
import AutoFocusTextInput from './components/ref/AutoFocusTextInput'
import OldContext from "./components/context/OldContext";
import Example from './components/hook/UseContext';
import ReduceDemo from './components/hook/UseReducer';
import Example2 from './components/hook/useReducerDemo/Example2';
import UseMemo from './components/hook/UseMemo';
import UseRef from './components/hook/UseRef';
import Example9 from './components/hook/自定义hook';
function App() {
  return (
    <div className="App">
      <Ref/>
      <AutoFocusTextInput/>
      <OldContext/>
      <Example/>
      <ReduceDemo/>
      <Example2/>
      <UseMemo/>
      <UseRef/>
      <Example9/>
    </div>
  );
}

export default App;
