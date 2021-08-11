import React from 'react'
import { render } from 'react-dom'


import logo from './logo.svg';
import './App.css';
import Game from './demo';
import Context from './context';
import ParentModal from './example/set-state';
import RouterDemo from './router/index';
function App() {
  return (
    <div className="App">
      {/* <Game /> */}
      {/* <Context /> */}
      {/* <ParentModal /> */}
      <RouterDemo />
    </div>
  );
}

export default App;
