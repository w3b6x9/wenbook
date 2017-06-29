import merge from 'lodash/merge';
import {
  RECEIVE_SINGLE_USER,
  RECEIVE_ALL_FRIENDS,
} from '../actions/user_actions';
import {
  RECEIVE_WALL_POST,
  RECEIVE_WALL_POSTS,
} from '../actions/post_actions';
import { RECEIVE_SINGLE_COMMENT } from '../actions/comment_actions';

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
      const friendDupState = merge({}, state);
      friendDupState.friends = action.friends;
      return friendDupState;
    case RECEIVE_WALL_POST:
      return merge(
        {},
        state,
        { posts: action.post }
      );
    case RECEIVE_WALL_POSTS:
      const wallPostDupState = merge({}, state);
      wallPostDupState.posts = action.posts;
      return wallPostDupState;
    case RECEIVE_SINGLE_COMMENT:
      return merge(
        {},
        state,
        {
          posts: {
            [action.comment.commentable_id]: {
              comments: {
                [action.comment.id]: action.comment
              }
            }
          }
        }
      );
    default:
      return state;
  }
};

export default UserReducer;
