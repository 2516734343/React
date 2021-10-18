
import isPlainObejct from "./utils/isPlaninObject";
import ActionTypes from "./utils/ActionTypes";

function validateReducers(reducers) {
  if (typeof reducers !== 'object') {
    throw new TypeError('reducers must be an object')
  }
  if (!isPlainObejct(reducers)) {
    throw new TypeError('reducers must be an plain object')
  }
  // 验证reducer的返回结果是不是undefined
  for (const key in reducers) {
    if (Object.hasOwnProperty.call(reducers, key)) {
      const reducer = reducers[key];

      // 传递一个特殊的type值
      let state = reducer(undefined, {
        type: ActionTypes.INIT()
      });

      if (state === undefined) {
        throw new TypeError('reducers must not return undefined')
      }

      let state = reducer(undefined, {
        type: ActionTypes.UNKNOW
          ()
      });
      if (state === undefined) {
        throw new TypeError('reducers must not return undefined')
      }
    }
  }
}
export default function (reducers) {
  validateReducers(reducers);

  return function (state = {}, action) {
    const newState = {}; // 要返回新的状态

    for (const key in reducers) {
      if (Object.hasOwnProperty.call(reducers, key)) {
        const reducer = reducers[key];
        newState[key] = reducer(state[key], action)
      }
    }
    return newState;


  }
}