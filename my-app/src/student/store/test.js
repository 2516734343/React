import store from "./index";
import { createChangeAction } from '../store/action/student/searchContion';
import { setIsLoading } from '../store/action/student/searchResult';

import { fetchStudents } from './action/student/searchResult';
console.log(store.getState());

store.dispatch(createChangeAction({
  key: 'abc',
  page: 2
}));
store.dispatch(setIsLoading(true));

// store.dispatch(fetchStudents)

console.log(store.getState());