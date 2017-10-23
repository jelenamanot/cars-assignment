import {applyMiddleware, createStore, combineReducers} from "redux";

// Reducer
import homeReducer from './reducers/homeReducer';

export default createStore(
	combineReducers({ homeReducer }),
   {},
   applyMiddleware()
);