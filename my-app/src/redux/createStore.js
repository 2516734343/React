

import ActionTypes from "./utils/ActionTypes";
import isPlainObejct from "./utils/isPlaninObject";


/**
 * 
 * @param {*} reducer 类型function 
 * @param {*} defaultState 类型：any，默认的状态值
 */

export default function (reducer, defaultState) {

  let currentReducer = reducer; // 当前使用的reducer
  let currentState = defaultState; // 当前仓库中的状态

  const listeners = []; // 记录所有的监听器/订阅者

  function dispatch(action) {
    // 验证action
    if (!isPlainObejct(action)) {
      throw new TypeError('action must be a plain object');
    }
    // 验证action的type属性是否存在
    if (!action.type) {
      throw new TypeError('action must has a property of type');
    }
    currentState = currentReducer(currentState, action);

    // 运行所有的订阅者（监听器）
    for (const listener of listeners) {
      listener();
    }

  }

  function getState() {
    return currentState;
  }

  /**
   * 添加一个监听器
   */
  function subscribe(listener) {
    listeners.push(listener);
    // 返回一个取消监听，将listener从数组中移除
    let isRemove = false;
    return function () {
      if (isRemove) return;
      const idx = listeners.indexOf(listener);
      listeners.splice(idx, 1);
      isRemove = true;
    }
  }

  // 创建仓库时，需要调用一次getState，分发一次初始的action
  dispatch({
    type: ActionTypes.INIT()
  })


  return {
    dispatch,
    getState,
    subscribe
  }




}