import {
  RECEIVED_ALL_TRACK_LIKES,
  RECEIVED_TRACK_LIKE,
  REMOVED_TRACK_LIKE,
} from '../../actions/like_actions';
import { RECEIVED_CURRENT_USER } from '../../actions/session_actions';

const likedTracksReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const newState = Object.assign({}, oldState);
  switch (action.type) {
    // case RECEIVED_ALL_TRACK_LIKES:
    //   return { ...oldState, ...action.trackLikes.trackLikes };
    case RECEIVED_TRACK_LIKE:
      newState[action.trackLike.id] = action.trackLike.trackId;
      return newState;
    case REMOVED_TRACK_LIKE:
      delete newState[action.trackLikeId.id];
      return newState;
    case RECEIVED_CURRENT_USER:
      return { ...oldState, ...action.currentUser.likedTracks };
    default:
      return oldState;
  }
};

export default likedTracksReducer;
