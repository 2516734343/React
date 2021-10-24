import { isPlainObject, isString } from "lodash"
import isPromise from "is-promise"

export default ({ dispatch }) => next => action => {

  if (!isFSA) {
    //如果不是一个标准的action
    //如果action是一个promise，则将其resolve的值dispatch，否则，不做任何处理，交给下一个中间件

    return isPromise(action) ? action.then(res => dispatch(res)) : next(action);

  }

  return isPromise(action.pyload)
    ? action.pyload
      .then(res => dispatch({ ...action, payload: res }))
      .catch(err => dispatch({ ...action, payload: err, error: true }))
    : next(action)


}


/**
 * 判断一个action是不是标准的flux的action
 * @param {*} action 
 */
function isFSA(action) {
  //action必须是一个平面对象 plain-object
  //action.type必须是一个字符串
  //action的属性不能包含其他非标准属性  标准属性["type", "payload", "error", "meta"]
  return isPlainObject(action)
    &&
    isString(action.type)
    &&
    Object.keys(action).every(key => ["type", "payload", "error", "meta"].includes(key));
}