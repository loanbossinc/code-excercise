import { combineReducers } from "redux";
import loading from "store/state/loading";
import authentication from "store/state/auth";
import user from "store/state/user";


const rootReducer = combineReducers({
  loading,
  authentication,
  user
});

export default rootReducer;
