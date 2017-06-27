import * as APIUtil from '../util/api_util';

export const RECEIVE_SINGLE_USER = 'RECEIVE_SINGLE_USER';
export const RECEIVE_ALL_FRIENDS = 'RECEIVE_ALL_FRIENDS';

export const receiveSingleUser = user => {
  return {
    type: RECEIVE_SINGLE_USER,
    user,
  };
};

export const receiveAllFriends = friends => {
  return {
    type: RECEIVE_ALL_FRIENDS,
    friends,
  };
};

export const requestSingleUser = id => dispatch => {
  return APIUtil.fetchSingleUser(id)
    .then(user => dispatch(receiveSingleUser(user)));
};

export const updateSingleUser = user => dispatch => {
  return APIUtil.updateSingleUser(user)
    .then(user => dispatch(receiveSingleUser(user)));
};

export const updateSingleUserImage = (userId, imageData) => dispatch => {
  return APIUtil.updateSingleUserImage(userId, imageData)
    .then(user => dispatch(receiveSingleUser(user)));
};

export const fetchAllFriends = userId => dispatch => {
  return APIUtil.fetchAllFriends(userId)
    .then(friends => dispatch(receiveAllFriends(friends)));
};
