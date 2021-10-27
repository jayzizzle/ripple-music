import {
  RECEIVED_ALL_PLAYLISTS,
  RECEIVED_PLAYLIST,
  REMOVED_PLAYLIST,
} from '../../actions/playlist_actions';
import { RECEIVED_CURRENT_USER } from '../../actions/session_actions';

const playlistsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const newState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVED_ALL_PLAYLISTS:
      return { ...oldState, ...action.playlists };
    case RECEIVED_PLAYLIST:
      newState[action.playlist.playlist.id] = action.playlist.playlist;
      return newState;
    case REMOVED_PLAYLIST:
      delete newState[action.playlistId];
      return newState;
    case RECEIVED_CURRENT_USER:
      return { ...oldState, ...action.currentUser.playlists };
    default:
      return oldState;
  }
};

export default playlistsReducer;
