import React from 'react';
import logo from './logo.svg';
import './App.css';
import Ref from "./components/ref/Ref";
import AutoFocusTextInput from './components/ref/AutoFocusTextInput'
import OldContext from "./components/context/OldContext";
function App() {
  return (
    <div className="App">
      <Ref/>
      <AutoFocusTextInput/>
      <OldContext/>
    </div>
  );
}

export default App;
