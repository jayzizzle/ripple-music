import {
  RECEIVED_NEW_PLAYLIST,
  ADDED_TRACK_TO_PLAYLIST,
  REMOVED_TRACK_FROM_PLAYLIST,
  ADDED_SINGLE_TRACKLIST,
} from '../../actions/current_playlist_actions';

const currentPlaylistReducer = (oldState = {}, action) => {
  //test preloaded state
  oldState = {
    1: {
      id: 1,
      artist: 'Jenevieve',
      title: 'Resume',
      audioUrl: '/assets/jenevieve-resume.mp3',
      cover: '/assets/jenevieve-division.jpg',
    },
    2: {
      id: 2,
      artist: 'Mahalia',
      title: 'Surprise Me',
      audioUrl: '/assets/mahalia-surprise_me.mp3',
      cover: '/assets/mahalia-seasons.jpg',
    },
    3: {
      id: 3,
      artist: 'Brasstracks',
      title: 'My Boo',
      audioUrl: '/assets/brasstracks-my_boo.mp3',
      cover: '/assets/brasstracks-my_boo.jpg',
    },
  };

  Object.freeze(oldState);
  const newState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVED_NEW_PLAYLIST:
      return { ...action.playlist };
    case ADDED_TRACK_TO_PLAYLIST:
      newState[action.track.id] = action.track;
      return newState;
    case REMOVED_TRACK_FROM_PLAYLIST:
      delete newState[trackId];
      return newState;
    case ADDED_SINGLE_TRACKLIST:
      return { [action.track.id]: action.track };
    default:
      return oldState;
  }
};

export default currentPlaylistReducer;
