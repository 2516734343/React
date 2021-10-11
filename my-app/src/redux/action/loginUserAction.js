export const SETLOGINUSERTYPE = Symbol('set-login-user');

/**
 * 设置登录用户的action
 * @param {*} user 
 * @returns 
 */
export function createSetLoginuserAction(user) {
  return {
    type: SETLOGINUSERTYPE,
    payload: user
  }
}