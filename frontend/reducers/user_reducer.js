import merge from 'lodash/merge';
import {
  RECEIVE_SINGLE_USER,
  RECEIVE_ALL_FRIENDS,
  RECEIVE_WALL_POST,
} from '../actions/user_actions';

const defaultState = Object.freeze({
  friends: {},
  posts: {},
});

const UserReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SINGLE_USER:
      return merge({}, state, action.user);
    case RECEIVE_ALL_FRIENDS:
      const dupState = merge({}, state);
      dupState.friends = action.friends;
      return dupState;
    case RECEIVE_WALL_POST:
      return merge(
        {},
        state,
        { posts: { [action.post.id]: action.post } }
      );
    default:
      return state;
  }
};

export default UserReducer;
