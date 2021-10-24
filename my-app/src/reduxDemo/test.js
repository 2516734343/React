

import store from "./index.copy";

import { createSetUserAction, createSetLoadingAction } from "./action/usersAction";
import { fetchUsers } from './action/usersAction';


// store.dispatch(createSetLoadingAction(true));

// const action = createSetUserAction([
//   { id: '222', loginId: 'admin', loginPwd: '123123' }
// ])

// store.dispatch(action);

store.dispatch(fetchUsers)



