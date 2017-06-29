import {
  RECEIVE_NEWS_POSTS,
  RECEIVE_POST,
} from '../actions/post_actions';
import { RECEIVE_SINGLE_COMMENT } from '../actions/comment_actions';
import { merge } from 'lodash';

const NewsFeedReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_NEWS_POSTS:
      return action.posts;
    case RECEIVE_POST:
      return merge(
        {},
        state,
        action.post
      );
    case RECEIVE_SINGLE_COMMENT:
      return merge(
        {},
        state,
        {
          [action.comment.commentable_id]: {
            comments: {
              [action.comment.id]: action.comment
            }
          }
        }
      );
    default:
      return state;
  }
};

export default NewsFeedReducer;
