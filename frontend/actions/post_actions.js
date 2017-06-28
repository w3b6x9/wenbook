import * as APIUtil from '../util/api_util';

export const RECEIVE_WALL_POST = 'RECEIVE_WALL_POST';

export const receiveWallPost = post => {
  return {
    type: RECEIVE_WALL_POST,
    post,
  };
};

export const createWallPost = post => dispatch => {
  return APIUtil.createPost(post)
    .then(post => dispatch(receiveWallPost(post)));
};
