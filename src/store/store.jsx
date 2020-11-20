import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import moviesReducer from "../reducers/moviesReducer";

const logger = createLogger();

const store = createStore(moviesReducer, undefined, applyMiddleware(logger));

export default store;
