import {
  RECEIVED_ALL_ALBUMS,
  RECEIVED_ALBUM,
} from '../../actions/album_actions';
import { RECEIVED_ARTIST } from '../../actions/artist_actions';
import { RECEIVED_ALL_ALBUM_LIKES } from '../../actions/like_actions';
import { RECEIVED_ALL_FEATURES } from '../../actions/feature_actions';

const albumsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const newState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVED_ALL_ALBUMS:
      return { ...oldState, ...action.albums };
    case RECEIVED_ALBUM:
      newState[action.album.album.id] = action.album.album;
      return newState;
    case RECEIVED_ARTIST:
      return { ...action.artist.albums };
    case RECEIVED_ALL_ALBUM_LIKES:
      return { ...action.albumLikes.albums };
    case RECEIVED_ALL_FEATURES:
      return { ...action.features.albums };
    default:
      return oldState;
  }
};

export default albumsReducer;
