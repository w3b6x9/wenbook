import { combineReducers } from 'redux';
import session from './session_reducer';
import dropdown from './dropdown_reducer';
import user from './user_reducer';
import friendship from './friendship_reducer';
import newsFeed from './news_feed_reducer';
import form from './form_reducer';

const RootReducer = combineReducers({
  dropdown,
  session,
  user,
  friendship,
  newsFeed,
  form,
});

export default RootReducer;
