import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { usersReducer } from "./users/reducer";
import { modelReducer } from "./isModel/reducer";

const rootReducer = combineReducers({
    users: usersReducer,
    isModel: modelReducer
  });

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );