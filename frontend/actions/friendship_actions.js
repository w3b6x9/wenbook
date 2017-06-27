import * as APIUtil from '../util/api_util';

export const RECEIVE_PENDING_REQUESTS = 'RECEIVE_PENDING_REQUESTS';
export const REMOVE_ANSWERED_REQUEST = 'REMOVE_ANSWERED_REQUEST';

export const receiveFriendshipRequests = friendships => {
  return {
    type: RECEIVE_PENDING_REQUESTS,
    friendships,
  };
};

export const removeAnsweredRequest = friendshipId => {
  return {
    type: REMOVE_ANSWERED_REQUEST,
    friendshipId,
  };
};

export const requestPendingRequests = () => dispatch => {
  return APIUtil.fetchPendingRequests()
    .then(friendships => dispatch(receiveFriendshipRequests(friendships)));
};

export const updatePendingRequest = friendship => dispatch => {
  const friendshipId = friendship.friendship_id;
  return APIUtil.updateFriendship(friendship)
    .then(() => dispatch(removeAnsweredRequest(friendshipId)));
};
