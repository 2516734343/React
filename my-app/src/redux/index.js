import { createStore } from 'redux';
/**
 * 
 * @param {*} state 之前仓库中的状态
 * @param {*} action 要做什么的对象
 * action: {type:操作类型,paload: 附加数据}
 */
function reducer(state, action) {
  // 返回一个新的状态
  if (action.type === 'increase') {
    return state + 1;
  } else if (action.type === 'decrease') {
    return state - 1;
  }
  return state;
}

const store = createStore(reducer, 10);

const action = {
  type: 'increase'
}

console.log(store.getState());

store.dispatch(action); // 向仓库分发action

console.log(store.getState());