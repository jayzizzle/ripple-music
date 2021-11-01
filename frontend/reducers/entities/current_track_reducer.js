import { RECEIVED_CURRENT_TRACK } from '../../actions/current_playlist_actions';

const currentTrackReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const newState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVED_CURRENT_TRACK:
      return action.currentTrack;
    default:
      return oldState;
  }
};

export default currentTrackReducer;
