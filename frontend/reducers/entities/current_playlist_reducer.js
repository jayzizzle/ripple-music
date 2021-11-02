import {
  RECEIVED_NEW_PLAYLIST,
  ADDED_TRACK_TO_PLAYLIST,
  REMOVED_TRACK_FROM_PLAYLIST,
  ADDED_SINGLE_TRACKLIST,
} from '../../actions/current_playlist_actions';
import { RECEIVED_FEATURED_PLAYLIST } from '../../actions/feature_actions';

const currentPlaylistReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const newState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVED_NEW_PLAYLIST:
      return Object.values(action.playlist);
    case ADDED_TRACK_TO_PLAYLIST:
      newState[action.track.id] = action.track;
      return newState;
    case REMOVED_TRACK_FROM_PLAYLIST:
      delete newState[trackId];
      return newState;
    case ADDED_SINGLE_TRACKLIST:
      return { [action.track.id]: action.track };
    case RECEIVED_FEATURED_PLAYLIST:
      return Object.values(action.songList.songList);
    default:
      return oldState;
  }
};

export default currentPlaylistReducer;
