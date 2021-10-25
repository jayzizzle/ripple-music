import * as APIUtil from '../util/playlist_api_util';

export const RECEIVED_ALL_PLAYLISTS = 'RECEIVED_ALL_PLAYLISTS';
export const RECEIVED_PLAYLIST = 'RECEIVED_PLAYLIST';
export const REMOVED_PLAYLIST = 'REMOVED_PLAYLIST';

export const receivedAllPlaylists = (playlists) => ({
  type: RECEIVED_ALL_PLAYLISTS,
  playlists,
});

export const receivedPlaylist = (playlist) => ({
  type: RECEIVED_PLAYLIST,
  playlist,
});

export const removedPlaylist = (playlistId) => ({
  type: REMOVED_PLAYLIST,
  playlistId,
});

export const getAllPlaylists = () => (dispatch) =>
  APIUtil.getAllPlaylists().then((playlists) =>
    dispatch(receivedAllPlaylists(playlists))
  );

export const getPlaylist = (playlistId) => (dispatch) =>
  APIUtil.getPlaylist(playlistId).then((playlist) =>
    dispatch(receivedPlaylist(playlist))
  );

export const postPlaylist = (playlist) => (dispatch) =>
  APIUtil.postPlaylist(playlist).then((playlist) =>
    dispatch(receivedPlaylist(playlist))
  );

export const patchPlaylist = (playlist) => (dispatch) =>
  APIUtil.patchPlaylist(playlist).then((playlist) =>
    dispatch(receivedPlaylist(playlist))
  );

export const deletePlaylist = (playlistId) => (dispatch) =>
  APIUtil.deletePlaylist(playlistId).then(() =>
    dispatch(removedPlaylist(playlistId))
  );
