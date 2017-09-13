import { ADD_ROUTE, REMOVE_ROUTE } from "../actions/types";

// reducer that will update routes piece of state in redux store
export default function(
  // on initial load, the state will be empty, so it will look for the default parameter
  // if anything is found in localStorage routes, it will update state properly
  // otherwise it will return just an empty array
  state = JSON.parse(localStorage.getItem("routes")) || [],
  action
) {
  switch (action.type) {
    case ADD_ROUTE:
      return state.concat([action.payload]);

    case REMOVE_ROUTE:
      return state.filter(route => route.id !== action.payload);
  }

  return state;
}
