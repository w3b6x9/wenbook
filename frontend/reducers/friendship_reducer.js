import {
  CREATE_FRIENDSHIP,
  RECEIVE_PENDING_REQUESTS,
  REMOVE_ANSWERED_REQUEST,
  RECEIVE_SENT_REQUESTS,
} from '../actions/friendship_actions';
import { merge } from 'lodash';

const defaultState = Object.freeze({
  receivedRequests: {},
  sentRequests: {},
  deniedRequests: {},
 });

const FriendshipReducer = (state = defaultState, action) => {
  switch (action.type) {
    case RECEIVE_PENDING_REQUESTS:
      const friendships = action.friendships;
      return merge(
        {},
        state,
        { receivedRequests: friendships }
      );
    case RECEIVE_SENT_REQUESTS:
      return merge(
        {},
        state,
        { sentRequests: action.requests }
      );
    case REMOVE_ANSWERED_REQUEST:
      const currentState = merge(
        {},
        state,
        { receivedRequests: friendships }
      );
      delete currentState.receivedRequests[action.friendshipId];
      return currentState;
    default:
      return state;
  }
};

export default FriendshipReducer;
