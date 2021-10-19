import {
  RECEIVED_CURRENT_USER,
  LOGGED_OUT_CURRENT_USER,
} from '../actions/session_actions';

const _nullUser = Object.freeze({
  id: null,
});

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVED_CURRENT_USER:
      return { id: action.currentUser.id };
    case LOGGED_OUT_CURRENT_USER:
      return _nullUser;
    default:
      return state;
  }
};

export default sessionReducer;
