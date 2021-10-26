import * as APIUtil from '../util/playlist_track_api_util';

export const RECEIVED_ALL_PLAYLIST_TRACKS = 'RECEIVED_ALL_PLAYLIST_TRACKS';
export const RECEIVED_PLAYLIST_TRACK = 'RECEIVED_PLAYLIST_TRACK';
export const REMOVED_PLAYLIST_TRACK = 'REMOVED_PLAYLIST_TRACK';

export const receivedAllPlaylistTracks = (playlist_tracks) => ({
  type: RECEIVED_ALL_PLAYLIST_TRACKS,
  playlist_tracks,
});

export const receivedPlaylistTrack = (playlistTrack) => ({
  type: RECEIVED_PLAYLIST_TRACK,
  playlistTrack,
});

export const removedPlaylistTrack = (playlistTrackId) => ({
  type: REMOVED_PLAYLIST_TRACK,
  playlistTrackId,
});

export const getAllPlaylistTracks = () => (dispatch) =>
  APIUtil.getAllPlaylistTracks().then((playlist_tracks) =>
    dispatch(receivedAllPlaylistTracks(playlist_tracks))
  );

export const getPlaylistTrack = (playlistTrackId) => (dispatch) =>
  APIUtil.getPlaylistTrack(playlistTrackId).then((playlistTrack) =>
    dispatch(receivedPlaylistTrack(playlistTrack))
  );

export const postPlaylistTrack = (playlistTrack) => (dispatch) =>
  APIUtil.postPlaylistTrack(playlistTrack).then((playlistTrack) =>
    dispatch(receivedPlaylistTrack(playlistTrack))
  );

export const patchPlaylistTrack = (playlistTrack) => (dispatch) =>
  APIUtil.patchPlaylistTrack(playlistTrack).then((playlistTrack) =>
    dispatch(receivedPlaylistTrack(playlistTrack))
  );

export const deletePlaylistTrack = (playlistTrackId) => (dispatch) =>
  APIUtil.deletePlaylistTrack(playlistTrackId).then((playlistTrack) =>
    dispatch(removedPlaylistTrack(playlistTrack))
  );
