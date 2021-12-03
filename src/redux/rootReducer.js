import { combineReducers } from "redux";
import usersReducer from './reducers/users.reducers'
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

const appReducer = combineReducers({
  usersReducer: usersReducer
})

const rootReducer = (state, action) => {
  return appReducer(state, action);
}

export default rootReducer;
