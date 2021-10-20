import {
  RECEIVED_ALL_FOLLOWS,
  RECEIVED_FOLLOW,
  REMOVED_FOLLOW,
} from '../../actions/follow_actions';
import { RECEIVED_CURRENT_USER } from '../../actions/session_actions';

const followsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const newState = Object.assign({}, oldState);
  switch (action.type) {
    // case RECEIVED_ALL_FOLLOWS:
    //   return { ...oldState, ...action.follows.follows };
    case RECEIVED_FOLLOW:
      newState[action.follow.id] = action.follow.artistId;
      return newState;
    case REMOVED_FOLLOW:
      delete newState[action.followId.id];
      return newState;
    case RECEIVED_CURRENT_USER:
      return { ...oldState, ...action.currentUser.followedArtists };
    default:
      return oldState;
  }
};

export default followsReducer;
