import { createStore, bindActionCreators } from 'redux';
// import numberAction from './action/number-action';
// import numberActions from './action/number-action';
// /**
//  * 
//  * @param {*} state 之前仓库中的状态
//  * @param {*} action 要做什么的对象
//  * action: {type:操作类型,paload: 附加数据}
//  */
// function reducer(state, action) {
//   // 返回一个新的状态?
//   if (action.type === 'increase') {
//     return state + 1;
//   } else if (action.type === 'decrease') {
//     return state - 1;
//   }
//   return state;
// }

// const store = createStore(reducer, 10);

// const action = {
//   type: 'increase'
// }
// //第一个参数，是action创建函数合并的对象，第二个参数是仓库的dispatch函数
// //得到一个新的对象，新对象中的属性名与第一个参数的属性名一致
// const boundActions = bindActionCreators(numberAction, store.dispatch);

// boundActions.getIncreaseType(); // 向store分发action

// console.log(store.getState());

// // store.dispatch(action); // 向仓库分发action

// console.log(store.getState());


import { createAddUserAction } from './action/usersAction';
import reducer from './reducer/index';

const store = createStore(reducer);

const unsubscribe = store.subscribe((mutation, state) => {
  console.log('状态改变了')
});
console.log(store.getState());

store.dispatch(createAddUserAction({
  id: 15,
  name: "abc",
  age: 10
}));
unsubscribe();
store.dispatch(createAddUserAction({
  id: 15,
  name: "abc",
  age: 10
}));

console.log(store.getState());
