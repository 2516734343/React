
import React from 'react'
import { render } from 'react-dom'
import Home from './Home';
import Login from './Login';
import Personal from './Personal';
import ProtectRoute from './ProtectRoute';
// 首先我们需要导入一些组件...
// import { Router, Route, Link, withRouter } from 'react-router'
import { BrowserRouter as Router, Route, Switch, Link, withRouter } from "react-router-dom"

function compA() {
  return <div>A组件</div>
}
function compB() {
  return <div>组件B</div>
}
export default function RouterDemo() {
  return <Router>
    {/* <Route path='/a' component={compA}></Route>
    <Route path='/b' component={compB}></Route> */}
    <div>
      <li><Link to="/login">登陆页</Link></li>
      <li><Link to="/index">首页</Link></li>
      <li><Link to="/personal">个人中心</Link></li>
    </div>
    <Switch>
      <Route path='/login' component={Login}></Route>
      <ProtectRoute path='/personal' component={Personal} />
      <Route path='/index' component={Home}></Route>
    </Switch>
  </Router>
}

// export default withRouter(RouterDemo)