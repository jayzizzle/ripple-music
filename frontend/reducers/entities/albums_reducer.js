import {
  RECEIVED_ALL_ALBUMS,
  RECEIVED_ALBUM,
} from '../../actions/album_actions';

const albumsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const newState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVED_ALL_ALBUMS:
      return { ...oldState, ...action.albums };
    case RECEIVED_ALBUM:
      newState[action.album.id] = action.album;
      return newState;
    default:
      return oldState;
  }
};

export default albumsReducer;
