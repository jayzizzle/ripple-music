import {
  RECEIVED_ALL_ALBUMS,
  RECEIVED_ALBUM,
} from '../../actions/album_actions';
import { RECEIVED_ALL_ALBUM_LIKES } from '../../actions/like_actions';

const albumsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const newState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVED_ALL_ALBUMS:
      return { ...oldState, ...action.albums };
    case RECEIVED_ALBUM:
      newState[action.album.id] = action.album;
      return newState;
    case RECEIVED_ALL_ALBUM_LIKES:
      return { ...action.albumLikes.albums };
    default:
      return oldState;
  }
};

export default albumsReducer;
