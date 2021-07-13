

// 1、异步更新state，将短时间内的多个setState合并成一个 ---》使用队列保存每次setState数据，每隔一段时间，清空队列，渲染组件。
// 2、为了解决异步更新导致的问题，增加另一种形式的setState：接受一个函数作为参数，在函数中可以得到前一个状态并返回下一个状态

import { renderComponent } from "../react-dom/diff";

const setStateQueue = [];
const renderQueue = [];

function defer(fn) {
  return Promise.resolve().then(fn);
}
export function enqueueSetState(stateChange, component) {

  if (setStateQueue.length === 0) {
    defer(flush);
  }

  setStateQueue.push({
    stateChange,
    component,
  })
  if (!renderQueue.some(item => item === component)) {
    renderQueue.push(component);
  }

}

// 清空队列
function flush() {
  let item;

  while (item = setStateQueue.shift()) {
    const { stateChange, component } = item;

    // 如果组件没有prevState，则将当前的state作为prevState
    if (!component.prevState) {
      component.prevState = Object.assign({}, this.state);
    }

    // 如果stateChange是一个函数，
    if (typeof stateChange === 'function') {
      Object.assign(component.state, stateChange(component.prevState, component.props));
    } else { // 如果直接是一个对象，则直接合并
      Object.assign(component.state, stateChange);
    }

    component.prevState = component.state;
  }

  while (component = renderQueue.shift()) {
    renderComponent(component);
  }

}
