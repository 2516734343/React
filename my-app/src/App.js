import React from 'react'
import { render } from 'react-dom'


import logo from './logo.svg';
import './App.css';
import Game from './demo';
import Context from './context';
import ParentModal from './example/set-state';
import RouterDemo from './router/index';
import Prevent from './router/preventSkip/Prevent';
import CounterContainer from './reduxDemo/counter';


import { Provider } from 'react-redux';
import store from './redux/index';
function App() {
  return (
    // <Provider store={store}>
    //   
    //     {/* <Game /> */}
    //     {/* <Context /> */}
    //     {/* <ParentModal /> */}
    //     {/* <RouterDemo /> */}
    //     {/* <Prevent /> */}
    //   </div>
    // </Provider>
    <Provider store={store}>
      <CounterContainer />
    </Provider>
  );
}

export default App;
