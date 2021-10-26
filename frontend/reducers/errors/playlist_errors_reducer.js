import {
  RECEIVED_PLAYLIST_ERRORS,
  CLEARED_PLAYLIST_ERRORS,
} from '../../actions/playlist_actions';

const playlistErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVED_PLAYLIST_ERRORS:
      return action.errors;
    case CLEARED_PLAYLIST_ERRORS:
      return [];
    default:
      return state;
  }
};

export default playlistErrorsReducer;
