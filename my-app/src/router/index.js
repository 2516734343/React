
import React from 'react'
import { render } from 'react-dom'

// 首先我们需要导入一些组件...
import { Router, Route, Link } from 'react-router'

function compA() {
  return <div>A组件</div>
}
function compB() {
  return <div>组件B</div>
}
export default function RouterDemo() {
  return <Router>
    <Route path='/a' component={compA}></Route>
    <Route path='/b' component={compB}></Route>
  </Router>
}