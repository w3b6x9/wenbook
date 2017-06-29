import * as APIUtil from '../util/api_util';

export const RECEIVE_SINGLE_COMMENT = 'RECEIVE_SINGLE_COMMENT';
export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';

export const receiveSingleComment = comment => {
  return {
    type: RECEIVE_SINGLE_COMMENT,
    comment,
  };
};

export const createComment = (postId, comment) => dispatch => {
  return APIUtil.createComment(postId, comment)
    .then(comment => dispatch(receiveSingleComment(comment)));
};
