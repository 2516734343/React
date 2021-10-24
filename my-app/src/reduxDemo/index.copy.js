
import { createStore, applyMiddleware } from "redux";
import reducer from './reducer/index';

import logger from "redux-logger";

import thunk from 'redux-thunk';


// const store = createStore(reducer, applyMiddleware(thunk, logger));

const store = createStore(reducer, applyMiddleware(thunk.withExtraArgument(123), logger));







