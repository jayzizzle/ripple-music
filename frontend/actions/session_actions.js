import * as APIUtil from '../util/session_api_util';

export const RECEIVED_CURRENT_USER = 'RECEIVED_CURRENT_USER';
export const LOGGED_OUT_CURRENT_USER = 'LOGGED_OUT_CURRENT_USER';
export const RECEIVED_SESSION_ERRORS = 'RECEIVED_SESSION_ERRORS';
export const CLEARED_SESSION_ERRORS = 'CLEARED_SESSION_ERRORS';

export const receivedCurrentUser = (currentUser) => ({
  type: RECEIVED_CURRENT_USER,
  currentUser,
});

export const loggedOutCurrentUser = () => ({
  type: LOGGED_OUT_CURRENT_USER,
});

export const receivedSessionErrors = (errors) => ({
  type: RECEIVED_SESSION_ERRORS,
  errors,
});

export const clearSessionErrors = () => ({
  type: CLEARED_SESSION_ERRORS,
});

export const signup = (user) => (dispatch) =>
  APIUtil.signup(user).then(
    (currentUser) => dispatch(receivedCurrentUser(currentUser)),
    (error) => dispatch(receivedSessionErrors(error.responseJSON))
  );

export const login = (user) => (dispatch) =>
  APIUtil.login(user).then(
    (currentUser) => dispatch(receivedCurrentUser(currentUser)),
    (error) => dispatch(receivedSessionErrors(error.responseJSON))
  );

export const logout = () => (dispatch) =>
  APIUtil.logout().then(
    () => dispatch(loggedOutCurrentUser()),
    (error) => dispatch(receivedSessionErrors(error.responseJSON))
  );

export const getUser = (userId) => (dispatch) =>
  APIUtil.getUser(userId).then(
    (user) => dispatch(receivedCurrentUser(user)),
    (error) => dispatch(receivedSessionErrors(error.responseJSON))
  );
