import * as APIUtil from '../util/api_util';

export const RECEIVE_SINGLE_COMMENT = 'RECEIVE_SINGLE_COMMENT';

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
