
import React, { Component } from 'react'

export default class Page2 extends Component {
  state = {
    val: ""
  }
  handleChange = (e) => {
    this.setState({
      val: e.target.value
    })
    this.handleBlock(e.target.value);
  }
  handleBlock = (value) => {
    if (value) {
      // 如果有内容，则跳转的时候加一个阻止的
      this.unBlock = this.props.history.block('切换页面会导致文本无法保留，是否真的要切换？');
    } else {
      if (this.unBlock) {
        this.unBlock();
      }
    }
  }
  componentWillUnmount() {
    if (this.unBlock) {
      this.unBlock();
    }
  }
  render() {
    return <div>
      <p>this is page2</p>
      <textarea value={this.state.val} onChange={this.handleChange} />
    </div>
  }

}
