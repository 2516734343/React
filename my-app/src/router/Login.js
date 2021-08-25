import loginStore from "./loginInfo"
import React from 'react'

export default function Login(props) {
  return <div>
    <h1>登陆页</h1>
    <button onClick={() => {
      loginStore.loginIn();
      if (props.location.state) {
        props.history.push(props.location.state);
      } else {
        props.history.push("/index")
      }
    }}>登陆</button>
  </div>
}