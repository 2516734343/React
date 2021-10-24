
import { getAllStudents } from "../../student/services";

export const ADDUSER = Symbol('add-user');
export const DELETEUSER = Symbol('delete-user');
export const UPDATEUSER = Symbol('update-user');
export const SETEUSER = Symbol('set-user');

export const SETELOADING = Symbol('set-loading');


export const createAddUserAction = (user) => ({
  type: ADDUSER,
  payload: user
})


export const createDeleteUserAction = (id) => ({
  type: DELETEUSER,
  payload: id,
})


export const createUpdateUserAction = (id, newserData) => ({
  type: UPDATEUSER,
  payload: {
    ...newserData,
    id,
  }
})


export const createSetUserAction = (id, newserData) => ({
  type: SETEUSER,
  payload: newserData
})



export const createSetLoadingAction = (id, isLoading) => ({
  type: SETELOADING,
  payload: isLoading
})


export function fetchUsers() {
  // thunk的存在允许action返回一个有副作用的函数
  return async function (dispatch, getState, extra) {
    dispatch(createSetLoadingAction(true));
    const users = await getAllStudents();
    const action = createSetUserAction(users);
    dispatch(action);
    dispatch(createSetLoadingAction(false));
  }
}