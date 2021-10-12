import { 
  RECEIVED_NEW_PLAYLIST,
  ADDED_TRACK_TO_PLAYLIST,
  REMOVED_TRACK_FROM_PLAYLIST,
} from "../../actions/current_playlist_actions";

const currentPlaylistReducer = (oldState={}, action) => {

  //test preloaded state
  oldState = {
    1: {id: 1, filePath: '/assets/jenevieve-resume.mp3'},
    2: {id: 2, filePath: '/assets/mahalia-surprise_me.mp3'},
    3: {id: 3, filePath: '/assets/brasstracks-my_boo.mp3'},
  }

  Object.freeze(oldState);
  const newState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVED_NEW_PLAYLIST:
      return {...action.playlist};
    case ADDED_TRACK_TO_PLAYLIST:
      newState[action.track.id] = action.track;
      return newState;
    case REMOVED_TRACK_FROM_PLAYLIST:
      delete newState[trackId];
      return newState;
    default:
      return oldState;
  }
};

export default currentPlaylistReducer;