import { combineReducers } from "redux";
import loginReducer from "./loginReducer";

import usersReducer from "./usersReducer";

const initialState = {
  loginReducer: null,
  usersReducer: null,
}

export default (state = {}, action) => {
  const newState = {
    loginReducer: loginReducer(state.loginReducer, action),
    usersReducer: usersReducer(state.usersReducer, action)
  };
  return newState;
}


// export default combineReducers({
//   loginReducer,
//   usersReducer
// })