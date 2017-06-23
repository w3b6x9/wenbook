import * as APIUtil from '../util/api_util';
export const RECEIVE_SINGLE_USER = 'RECEIVE_SINGLE_USER';

export const receiveSingleUser = user => {
  return {
    type: RECEIVE_SINGLE_USER,
    user,
  };
};

export const requestSingleUser = id => dispatch => {
  return APIUtil.fetchSingleUser(id)
    .then(user => dispatch(receiveSingleUser(user)));
};
