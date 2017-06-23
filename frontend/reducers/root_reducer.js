import { combineReducers } from 'redux';
import session from './session_reducer';
import dropdown from './dropdown_reducer';
import user from './user_reducer';

const RootReducer = combineReducers({
  session,
  dropdown,
  user,
});

export default RootReducer;
