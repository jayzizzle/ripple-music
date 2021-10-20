import {
  RECEIVED_ALL_ALBUM_LIKES,
  RECEIVED_ALBUM_LIKE,
  REMOVED_ALBUM_LIKE,
} from '../../actions/like_actions';
import { RECEIVED_CURRENT_USER } from '../../actions/session_actions';

const likedAlbumsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const newState = Object.assign({}, oldState);
  switch (action.type) {
    // case RECEIVED_ALL_ALBUM_LIKES:
    //   return { ...oldState, ...action.albumLikes.albumLikes };
    case RECEIVED_ALBUM_LIKE:
      newState[action.albumLike.id] = action.albumLike.albumId;
      return newState;
    case REMOVED_ALBUM_LIKE:
      delete newState[action.albumLikeId.id];
      return newState;
    case RECEIVED_CURRENT_USER:
      return { ...oldState, ...action.currentUser.likedAlbums };
    default:
      return oldState;
  }
};

export default likedAlbumsReducer;
