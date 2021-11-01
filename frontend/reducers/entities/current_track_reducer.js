import {
  RECEIVED_CURRENT_TRACK,
  RECEIVED_NEW_PLAYLIST,
} from '../../actions/current_playlist_actions';

const defaultState = { idx: 0 };

const currentTrackReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState);
  const newState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVED_CURRENT_TRACK:
      return action.currentTrack;
    case RECEIVED_NEW_PLAYLIST:
      return { idx: 0 };
    default:
      return oldState;
  }
};

export default currentTrackReducer;
