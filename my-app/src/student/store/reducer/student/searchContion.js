
import { actionTypes } from "../../action/student/searchContion";
const initialState = {
  key: "",
  sex: -1,
  page: 1,
  limit: 10,
}
/**
 * 控制查询条件
 * @param {*}} state 
 * @param {*} action 
 */
export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.change: return {
      ...state,
      ...action.pyload,
    };
    default: return state;
  }
  return state;

}