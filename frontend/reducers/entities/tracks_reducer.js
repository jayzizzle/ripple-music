import {
  RECEIVED_ALL_TRACKS,
  RECEIVED_TRACK,
} from '../../actions/track_actions';
import { RECEIVED_ALBUM } from '../../actions/album_actions';
import { RECEIVED_ALL_TRACK_LIKES } from '../../actions/like_actions';
import { RECEIVED_PLAYLIST } from '../../actions/playlist_actions';
import { REMOVED_PLAYLIST_TRACK } from '../../actions/playlist_track_actions';

const tracksReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const newState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVED_ALL_TRACKS:
      return { ...oldState, ...action.tracks };
    case RECEIVED_TRACK:
      newState[action.track.id] = action.track;
      return newState;
    case RECEIVED_ALBUM:
      return { ...action.album.tracks };
    case RECEIVED_ALL_TRACK_LIKES:
      return { ...action.trackLikes.tracks };
    case RECEIVED_PLAYLIST:
      return { ...action.playlist.tracks };
    case REMOVED_PLAYLIST_TRACK:
      delete newState[action.playlistTrackId.trackId];
      return newState;
    default:
      return oldState;
  }
};

export default tracksReducer;
