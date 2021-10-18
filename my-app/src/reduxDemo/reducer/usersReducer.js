
import * as usersAction from '../action/usersAction';


const initialState = [
  { id: 11, name: '用户1', age: 12 },
  { id: 12, name: '用户2', age: 13 },
  { id: 13, name: '用户3', age: 14 }
]

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case usersAction.ADDUSER:
      return [...state, ...payload];

    case usersAction.DELETEUSER:
      return state.filter(user => user.id !== payload);

    case usersAction.UPDATEUSER:
      return state.map(user => user.id === payload.id ? { ...user, ...payload } : user);

    default:
      return state
  }
}
