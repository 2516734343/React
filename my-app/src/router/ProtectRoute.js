import React from 'react'
import { Route, Redirect } from "react-router-dom"
import loginInfo from './loginInfo'


export default function ProtectRoute({ component: Component, children, render, ...rest }) {
  return <Route render={
    (values) => {
      if (loginInfo.islogin) {
        return <Component />
      } else {
        return <Redirect to={{
          pathname: '/login',
          state: values.location.pathname
        }} />
      }
    }
  } />
}