import { combineReducers } from 'redux';
import users from './entities/users_reducer';
import currentPlaylist from './entities/current_playlist_reducer';
import artists from './entities/artists_reducer';
// import albums from './entities/albums_reducer';
// import tracks from './entities/tracks_reducer';
// import playlists from './entities/playlists_reducer';
// import likedTracks from "./entities/liked_tracks_reducer";
// import likedAlbums from "./entities/liked_albums_reducer";

export default combineReducers({
  users,
  currentPlaylist,
  artists,
  // albums,
  // tracks,
  // playlists,
  // likedTracks,
  // likedAlbums,
  // followedArtists,
});
