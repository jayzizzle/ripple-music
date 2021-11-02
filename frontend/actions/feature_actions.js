import * as APIUtil from '../util/feature_api_util';

export const RECEIVED_ALL_FEATURES = 'RECEIVED_ALL_FEATURES';
export const RECEIVED_FEATURED_PLAYLIST = 'RECEIVED_FEATURED_PLAYLIST';

export const receivedAllFeatures = (features) => ({
  type: RECEIVED_ALL_FEATURES,
  features,
});

export const receivedFeaturedPlaylist = (songList) => ({
  type: RECEIVED_FEATURED_PLAYLIST,
  songList,
});

export const getAllFeatures = () => (dispatch) =>
  APIUtil.getAllFeatures().then((features) =>
    dispatch(receivedAllFeatures(features))
  );

export const getFeaturedPlaylist = (albumId) => (dispatch) =>
  APIUtil.getFeaturedPlaylist(albumId).then((songList) =>
    dispatch(receivedFeaturedPlaylist(songList))
  );
