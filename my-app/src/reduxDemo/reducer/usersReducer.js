
import * as usersAction from '../action/usersAction';


const initialState = {
  isLoading: false,
  datas: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case usersAction.ADDUSER:
      return {
        ...state,
        datas: [...state.datas, payload]
      };

    case usersAction.DELETEUSER:
      return {
        ...state,
        datas: state.datas.filter(user => user.id !== payload)
      }

    case usersAction.UPDATEUSER:
      return {
        ...state,
        datas: state.datas.map(user => user.id === payload.id ? { ...user, ...payload } : user)
      }

    case usersAction.SETEUSER:
      return {
        ...state,
        datas: payload,
      };

    case usersAction.SETELOADING:
      return {
        ...state,
        isLoading: payload,
      };

    default:
      return state
  }
}
