import React from 'react'
import { render } from 'react-dom'


import logo from './logo.svg';
import './App.css';
import Game from './demo';
import Context from './context';
import ParentModal from './example/set-state';
import RouterDemo from './router/index';
import Prevent from './router/preventSkip/Prevent';
function App() {
  return (
    <div className="App">
      {/* <Game /> */}
      {/* <Context /> */}
      {/* <ParentModal /> */}
      {/* <RouterDemo /> */}
      <Prevent />
    </div>
  );
}

export default App;
