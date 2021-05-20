import {
  combineReducers
} from "redux";

/**
 * Create a reducer which sets the loading status.
 *
 * @param {String} request - The request constant to use
 * @param {String} success - The success constant to use
 * @param {String} failure - The failure constant to use
 * @return {function} a reducer
 */
export function makeReducer(request, success, failure) {
  return function reducer(state = false, action) {
    if (action.type === request) {      
      return true;
    } else if (action.type === success || action.type === failure) {
      return false;
    }
    return state;
  };
}

/**
 * Create a reducer which sets the loading status, based on multiple actions.
 *
 * @param  {Array.String} startActions - Actions that intiate loading
 * @param  {Array.String} finishActions - Actions that stop loading
 * @return {Function}
 */
export function makeMultiActionReducer(startActions, finishActions) {
  let counter = 0;
  return function reducer(state = false, action) {
    if (startActions.indexOf(action.type) !== -1) {
      counter += 1;
    } else {
      return state;
    }
    return counter > 0;
  };
}

export default combineReducers({
  authentication: makeMultiActionReducer([]),
});