
import { actionTypes } from "../../action/student/searchResult";
const initialState = {
  students: [],
  total: 0,
  isLoading: false,
}

/**
 * 控制查询结果
 * @param {*}} state 
 * @param {*} action 
 */
export default function (state = initialState, action) {
  console.log(action.type, action.payload);
  switch (action.type) {
    case actionTypes.setIsLoading:
      console.log(action.payload);
      return {
        ...state,
        isLoading: action.payload,
      }
    case actionTypes.setStudentsAndTotal:
      return {
        ...state,
        students: action.payload.datas,
        total: action.payload.total
      }
  }
  return state;
}