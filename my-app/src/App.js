import React from 'react'
import { render } from 'react-dom'


// import logo from './logo.svg';
// import './App.css';
// import Game from './demo';
// import Context from './context';
// import ParentModal from './example/set-state';
// import RouterDemo from './router/index';
// import Prevent from './router/preventSkip/Prevent';
// import CounterContainer from './reduxDemo/counter';

import { Provider } from 'react-redux';
// import store from './redux/index';
import store from './student/store/index';
// import { Route, Router, Switch } from 'react-router';
import { Route, Switch } from "react-router-dom"
import { ConnectedRouter } from 'connected-react-router'
// 学生查询
// import HomePage from './student/pages/home';
// import Login from './student/pages/login';

// import history from './student/store/history';

import Footer from './todoList/components/Footer';
import AddTodo from './todoList/containers/AddTodo';
import VisibleTodoList from './todoList/containers/VisibleTodoList';

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
    // <Provider store={store}>
    //   <CounterContainer />
    // </Provider>
    // <Provider store={store}>
    //   <ConnectedRouter history={history}>
    //     <Switch>
    //       <Route component={HomePage} path='/login' />
    //       <Route component={Login} path='/' />
    //     </Switch>
    //   </ConnectedRouter>
    // </Provider>
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>


  );
}

export default App;
