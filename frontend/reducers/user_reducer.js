import merge from 'lodash/merge';
import {
  RECEIVE_SINGLE_USER,
  RECEIVE_ALL_FRIENDS,
} from '../actions/user_actions';

const defaultState = Object.freeze({
  friends: {},
});

const UserReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SINGLE_USER:
      return merge({}, state, action.user);
    case RECEIVE_ALL_FRIENDS:
      return merge({}, state, { friends: action.friends });
    default:
      return state;
  }
};

export default UserReducer;
