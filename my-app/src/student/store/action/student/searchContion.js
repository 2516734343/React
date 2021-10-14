
/**
 * 对学生查询条件改变的action类型
 */
export const actionTypes = {
  change: Symbol('change')
}
/**
 * 根据新的查询条件，产生一个action
 * @param {*} newCondition 
 */
export function createChangeAction(newCondition) {
  return {
    type: actionTypes.change,
    pyload: newCondition,
  }
}


