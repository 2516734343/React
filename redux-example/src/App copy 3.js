import React, { useContext, useEffect, useState } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

const ctx = React.createContext();


// function Test() {
//   return <div>
//     <ctx.Consumer>
//       {value => <div>value:{value}</div>}
//     </ctx.Consumer>
//   </div>
// }


function Test() {
  const value = useContext(ctx);
  return <div>
    {<div>value:{value}</div>}
  </div>
}
function App() {


  return (
    <div className="App">
      <ctx.Provider value={'abc'}>
        <Test />
      </ctx.Provider>
    </div>
  );
}

export default App;
