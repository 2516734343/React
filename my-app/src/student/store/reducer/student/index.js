import searchContion from "./searchContion";
import searchResult from "./searchResult";

import { combineReducers } from "redux";

import { connectRouter } from 'connected-react-router';
// import { createBrowserHistory } from 'history';
// let history = createBrowserHistory();
import history from "../../history";

export default combineReducers({
  searchContion,
  searchResult,
  // router: connectRouter(history)
})