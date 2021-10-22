import * as APIUtil from '../util/track_api_util';

export const RECEIVED_ALL_TRACKS = 'RECEIVED_ALL_TRACKS';
export const RECEIVED_TRACK = 'RECEIVED_TRACK';

export const receivedAllTracks = (tracks) => ({
  type: RECEIVED_ALL_TRACKS,
  tracks,
});

export const receivedTrack = (track) => ({
  type: RECEIVED_TRACK,
  track,
});

export const getAllTracks = () => (dispatch) =>
  APIUtil.getAllTracks().then((tracks) => dispatch(receivedAllTracks(tracks)));

export const getTrack = (trackId) => (dispatch) =>
  APIUtil.getTrack(trackId).then((track) => dispatch(receivedTrack(track)));
