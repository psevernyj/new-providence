import {combineReducers, createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {compose} from "redux";

const reducers = combineReducers({});

const enhanceMiddleware = compose(applyMiddleware(thunk))

export const store = createStore(reducers, enhanceMiddleware)