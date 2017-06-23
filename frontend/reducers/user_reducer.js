import merge from 'lodash/merge';
import { RECEIVE_SINGLE_USER } from '../actions/user_actions';

const UserReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SINGLE_USER:
      return merge({}, state, { user: action.user });
    default:
      return state;
  }
};

export default UserReducer;
