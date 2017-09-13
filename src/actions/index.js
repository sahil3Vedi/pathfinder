import { ADD_ROUTE, REMOVE_ROUTE } from "./types";



// in this file are action creators, and thet are self descriptive,
// so no need to add extra comments


export function addRoute(route) {
  return dispatch => {
    dispatch({ type: ADD_ROUTE, payload: route });
  };
}

export function removeRoute(id) {
  return dispatch => {
    dispatch({ type: REMOVE_ROUTE, payload: id });
  };
}
