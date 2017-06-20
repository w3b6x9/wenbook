import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SIGN_UP_ERRORS = 'RECEIVE_SIGN_UP_ERRORS';
export const RECEIVE_SIGN_IN_ERRORS = 'RECEIVE_SIGN_IN_ERRORS';

export const receiveCurrentUser = currentUser => {
  return ({
    type: RECEIVE_CURRENT_USER,
    currentUser,
  });
};

export const receiveSignUpErrors = errors => {
  return ({
    type: RECEIVE_SIGN_UP_ERRORS,
    errorsSignUp: errors,
  });
};

export const receiveSignInErrors = errors => {
  return ({
    type: RECEIVE_SIGN_IN_ERRORS,
    errorsSignIn: errors,
  })
}

export const signUp = user => {
  return dispatch => {
    return APIUtil.signUp(user)
      .then(
        user => dispatch(receiveCurrentUser(user)),
        err => dispatch(receiveSignUpErrors(err.responseJSON))
      );
  };
};

export const signIn = user => {
  return dispatch => {
    return APIUtil.signIn(user)
      .then(
        user => dispatch(receiveCurrentUser(user)),
        err => dispatch(receiveSignInErrors(err.responseJSON))
      );
  };
};

export const signOut = () => {
  return dispatch => {
    return APIUtil.signOut()
      .then(user => dispatch(receiveCurrentUser(null)));
  };
};
