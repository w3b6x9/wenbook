import { combineReducers } from 'redux';
import session from './session_reducer';
import dropdown from './dropdown_reducer';

const RootReducer = combineReducers({
  session,
  dropdown,
});

export default RootReducer;
