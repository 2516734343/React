import {
  createStore
} from "redux";

import todoAppReducer from "./reducer";

let store = createStore(todoAppReducer);