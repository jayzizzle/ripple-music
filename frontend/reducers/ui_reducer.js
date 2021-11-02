import { SET_TO_PLAY, SET_TO_PAUSE, SET_TO_READY } from '../actions/ui_actions';

const uiReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const newState = Object.assign({}, oldState);
  switch (action.type) {
    case SET_TO_PLAY:
      return { ...action.playerStatus };
    case SET_TO_PAUSE:
      return { ...action.playerStatus };
    case SET_TO_READY:
      return { ...action.playerStatus };
    default:
      return oldState;
  }
};

export default uiReducer;
