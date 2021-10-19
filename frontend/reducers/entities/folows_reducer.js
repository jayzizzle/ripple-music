import {
  RECEIVED_ALL_FOLLOWS,
  RECEIVED_FOLLOW,
  REMOVED_FOLLOW,
} from '../../actions/follow_actions';

const followsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const newState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVED_ALL_FOLLOWS:
      return { ...oldState, ...action.follows };
    case RECEIVED_FOLLOW:
      newState[action.follow.id] = action.follow.artistId;
      return newState;
    case REMOVED_FOLLOW:
      delete newState[action.artistId];
      return newState;
    default:
      return oldState;
  }
};

export default followsReducer;
