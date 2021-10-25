
// 创建一个唯一的reducer
import student from "./student";

import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router"
import history from "../history";

export default combineReducers({
  student,
  router: connectRouter(history)
})