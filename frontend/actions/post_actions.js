import * as APIUtil from '../util/api_util';

export const RECEIVE_POST = 'RECEIVE_POST';
export const RECEIVE_WALL_POSTS = 'RECEIVE_WALL_POSTS';
export const RECEIVE_NEWS_POSTS = 'RECEIVE_NEWS_POSTS';

export const receivePost = post => {
  return {
    type: RECEIVE_POST,
    post,
  };
};

export const receiveWallPosts = posts => {
  return {
    type: RECEIVE_WALL_POSTS,
    posts,
  };
};

export const receiveNewsPosts = posts => {
  return {
    type: RECEIVE_NEWS_POSTS,
    posts,
  };
};

export const createWallPost = post => dispatch => {
  return APIUtil.createPost(post)
    .then(post => dispatch(receivePost(post)));
};

export const fetchWallPosts = userId => dispatch => {
  return APIUtil.fetchWallPosts(userId)
    .then(posts => dispatch(receiveWallPosts(posts)));
};

export const fetchNewsPosts = userId => dispatch => {
  return APIUtil.fetchNewsPosts(userId)
    .then(posts => dispatch(receiveNewsPosts(posts)));
};
