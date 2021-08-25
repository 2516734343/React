
import React, { Component } from 'react'
import Prompt from './Prompt'

export default class Page2 extends Component {
  state = {
    val: ""
  }
  handleChange = (e) => {
    this.setState({
      val: e.target.value
    })
  }
  render() {
    return <div>
      <p>this is page2</p>
      <textarea value={this.state.val} onChange={this.handleChange} />
      <Prompt when={this.state.val} message={"请确认数据已经保存，离开页面数据会丢失"} />
    </div>
  }

}
