

export default function (actionCreators, dispatch) {

  if (typeof actionCreators === 'function') {

    return getAutoDispatchActionCreator(actionCreators, dispatch);

  } else if (typeof actionCreators === 'object') { // 是对象

    const result = {};

    for (const key in actionCreators) {

      if (Object.hasOwnProperty.call(actionCreators, key)) {

        const actionCreator = object[key]; // 取出对应的属性值

        if (typeof actionCreator === 'function') {
          result[key] = getAutoDispatchActionCreator(actionCreator, dispatch);
        }

      }
    }
    return result;
  } else {
    throw new TypeError('actionCreators must be an object or function')
  }
}

/**
 * 得到一个自动分发action创建函数
 * @param {*} actionCreators 
 * @param {*} dispatch 
 */
function getAutoDispatchActionCreator(actionCreators, dispatch) {

  return function (...args) {
    const action = actionCreators(...args);
    dispatch(action);
  }
}