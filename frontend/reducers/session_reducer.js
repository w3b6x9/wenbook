import merge from 'lodash/merge';
import {
  RECEIVE_CURRENT_USER,
  RECEIVE_SIGN_UP_ERRORS,
  RECEIVE_SIGN_IN_ERRORS,
} from '../actions/session_actions';

const nullUser = Object.freeze({
  currentUser: null,
  errorsSignUp: [],
  errorsSignIn: [],
});

const SessionReducer = (state = nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, nullUser, { currentUser });
    case RECEIVE_SIGN_UP_ERRORS:
      const errorsSignUp = action.errorsSignUp;
      return merge({}, nullUser, { errorsSignUp });
    case RECEIVE_SIGN_IN_ERRORS:
      const errorsSignIn = action.errorsSignIn;
      return merge({}, nullUser, { errorsSignIn });
    default:
      return state;
  }
};

export default SessionReducer;
