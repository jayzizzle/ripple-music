import {
  RECEIVED_NEW_PLAYLIST,
  ADDED_TRACK_TO_PLAYLIST,
  REMOVED_TRACK_FROM_PLAYLIST,
  ADDED_SINGLE_TRACKLIST,
} from '../../actions/current_playlist_actions';

const defaultState = {
  1: {
    id: 1,
    artist: 'Jenevieve',
    title: 'Resume',
    albumId: 4,
    album: 'Division',
    audioUrl: '/assets/jenevieve-resume.mp3',
    cover: '/assets/jenevieve-division.jpg',
    playlistTitle: 'Ripple Playlist',
  },
  2: {
    id: 2,
    artist: 'Mahalia',
    title: 'Surprise Me',
    albumId: 5,
    album: 'Seasons',
    audioUrl: '/assets/mahalia-surprise_me.mp3',
    cover: '/assets/mahalia-seasons.jpg',
    playlistTitle: 'Ripple Playlist',
  },
  3: {
    id: 3,
    artist: 'Brasstracks',
    title: 'My Boo',
    albumId: 6,
    album: 'My Boo',
    audioUrl: '/assets/brasstracks-my_boo.mp3',
    cover: '/assets/brasstracks-my_boo.jpg',
    playlistTitle: 'Ripple Playlist',
  },
};

const currentPlaylistReducer = (oldState = defaultState, action) => {
  //test preloaded state

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
    default:
      return oldState;
  }
};

export default currentPlaylistReducer;
