import { 
  RECEIVED_NEW_PLAYLIST,
  ADDED_TRACK_TO_PLAYLIST,
  REMOVED_TRACK_FROM_PLAYLIST,
} from "../../actions/current_playlist_actions";

const currentPlaylistReducer = (oldState={}, action) => {

  //test preloaded state
  oldState = {
    1: {id: 1, artistName: 'Jenevieve', title: 'Resume', filePath: '/assets/jenevieve-resume.mp3', cover: '/assets/jenevieve-resume.jpg'},
    2: {id: 2, artistName: 'Mahalia', title: 'Surprise Me', filePath: '/assets/mahalia-surprise_me.mp3', cover: '/assets/mahalia-surprise_me.jpg'},
    3: {id: 3, artistName: 'Brasstracks', title: 'My Boo', filePath: '/assets/brasstracks-my_boo.mp3', cover: '/assets/brasstracks-my_boo.jpg'},
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