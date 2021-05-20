import { combineReducers } from "redux";
import loading from "store/state/loading";
import authentication from "store/state/auth";


const rootReducer = combineReducers({
  loading,
  authentication,
});

export default rootReducer;
