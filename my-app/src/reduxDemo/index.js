import { createStore, bindActionCreators, applyMiddleware } from 'redux';
import { numberActions } from './action/number-action';
/**
 * 
 * @param {*} state 之前仓库中的状态
 * @param {*} action 要做什么的对象
 * action: {type:操作类型,paload: 附加数据}
 */
function reducer(state, action) {
  // 返回一个新的状态?
  if (action.type === 'increase') {
    return state + 1;
  } else if (action.type === 'decrease') {
    return state - 1;
  }
  return state;
}

const logger1 = store => next => action => {
  console.log('旧数据', store.getState());
  console.log('action', action);
  next(action); // 执行下一个dispatch
  console.log('新数据', store.getState());
}
// 书写一个中间件 在创建仓库后运行
// 返回一个dispatch
function loggermiddleWare(store) {

  console.log('中间件1');
  console.log(store);
  return function (next) { // next是下一个中间件传递过来的dispatch
    // 返回的函数就是最终要运用的dispatch函数
    return function dispath(action) {
      console.log('旧数据', store.getState());
      console.log('action', action);
      next(action); // 执行下一个dispatch
      console.log('新数据', store.getState());

    }
  }

}
function logger2(store) {
  //
  console.log('中间件2');
  console.log(store);

  return function (next) {  // next是下一个中间件传递过来的dispatch
    // 返回的函数就是最终要运用的dispatch函数
    return function dispath(action) {

      console.log('旧数据', store.getState());
      console.log('action', action);
      next(action); // 执行下一个dispatch
      console.log('新数据', store.getState());
    }
  }


}

// 应用中间件方式1
const store = createStore(reducer, 10, applyMiddleware(loggermiddleWare, logger2));

// 方式2
// - applyMiddleware 函数，用于记录有哪些中间件，它会返回一个函数
//   - 该函数用于记录创建仓库的方法，然后又返回一个函数
// applyMiddleware(logger1, logger2)(createStore)(reducer, 10);




const action = {
  type: 'increase'
}


//第一个参数，是action创建函数合并的对象，第二个参数是仓库的dispatch函数
//得到一个新的对象，新对象中的属性名与第一个参数的属性名一致
// const boundActions = bindActionCreators(numberActions, store.dispatch);

// boundActions.getIncreaseType(); // 向store分发action

// console.log(store.getState());

// store.dispatch(action); // 向仓库分发action

console.log(store.getState());


// import { createAddUserAction } from './action/usersAction';
// import reducer from './reducer/index';

// const store = createStore(reducer);

// const unsubscribe = store.subscribe((mutation, state) => {
//   console.log('状态改变了')
// });
// console.log(store.getState());

// store.dispatch(createAddUserAction({
//   id: 15,
//   name: "abc",
//   age: 10
// }));
// unsubscribe();
// store.dispatch(createAddUserAction({
//   id: 15,
//   name: "abc",
//   age: 10
// }));

// console.log(store.getState());









export default store;
