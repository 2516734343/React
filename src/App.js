import React from 'react';
import logo from './logo.svg';
import './App.css';
import Ref from "./components/ref/Ref";
import AutoFocusTextInput from './components/ref/AutoFocusTextInput'
function App() {
  return (
    <div className="App">
      <Ref/>
      <AutoFocusTextInput/>
    </div>
  );
}

export default App;
