import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { StudentWrap } from './components/studentWrap';

function App() {


  return (
    <div className="App">
      <StudentWrap />
    </div>
  );
}

export default App;
