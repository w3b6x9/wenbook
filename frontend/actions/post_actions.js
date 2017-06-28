import * as APIUtil from '../util/api_util';

export const RECEIVE_WALL_POST = 'RECEIVE_WALL_POST';
export const RECEIVE_WALL_POSTS = 'RECEIVE_WALL_POSTS';

export const receiveWallPost = post => {
  return {
    type: RECEIVE_WALL_POST,
    post,
  };
};

export const receiveWallPosts = posts => {
  return {
    type: RECEIVE_WALL_POSTS,
    posts,
  };
};

export const createWallPost = post => dispatch => {
  return APIUtil.createPost(post)
    .then(post => dispatch(receiveWallPost(post)));
};

export const fetchWallPosts = (userId) => dispatch => {
  return APIUtil.fetchWallPosts(userId)
    .then(posts => dispatch(receiveWallPosts(posts)));
};
