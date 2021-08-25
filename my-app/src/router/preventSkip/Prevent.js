import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link, NavLink, withRouter } from "react-router-dom"
import Page1 from './Page1';
// import Page2 from './Page2';
import Page2 from './Page2_copy';
export default function Prevent() {
  return <Router getUserConfirmation={(msg, callback) => {
    callback(window.confirm(msg));
  }}>
    <NavLink to="/page1">page1</NavLink>
    <NavLink to="/page2">page2</NavLink>
    <Switch>
      <Route path="/page1" component={Page1}></Route>
      <Route path="/page2" component={Page2}></Route>
    </Switch>
  </Router>
}