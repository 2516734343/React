// 创建仓库并导出
import { createStore, applyMiddleware } from "redux";

import reducer from "./reducer";

import thunk from "redux-thunk";
import promise from 'redux-promise';
import { routerMiddleware } from 'connected-react-router'

// const store = createStore(reducer, applyMiddleware(thunk));

const store = createStore(reducer(history), applyMiddleware(routerMiddleware));

export default store;




