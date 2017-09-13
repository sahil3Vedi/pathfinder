import { combineReducers } from 'redux';
import routeReducer from './routesReducer';

// combining reducers
// in this example, there is only one reducer
const rootReducer = combineReducers({
  routes: routeReducer
});

export default rootReducer;
