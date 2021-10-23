import * as APIUtil from '../util/like_api_util';

// ALBUM LIKES

export const RECEIVED_ALL_ALBUM_LIKES = 'RECEIVED_ALL_ALBUM_LIKES';
export const RECEIVED_ALBUM_LIKE = 'RECEIVED_ALBUM_LIKE';
export const REMOVED_ALBUM_LIKE = 'REMOVED_ALBUM_LIKE';

export const receivedAllAlbumLikes = (albumLikes) => ({
  type: RECEIVED_ALL_ALBUM_LIKES,
  albumLikes,
});

export const receivedAlbumLike = (albumLike) => ({
  type: RECEIVED_ALBUM_LIKE,
  albumLike,
});

export const removedAlbumLike = (albumLikeId) => ({
  type: REMOVED_ALBUM_LIKE,
  albumLikeId,
});

export const getAllAlbumLikes = (userId) => (dispatch) =>
  APIUtil.getAllAlbumLikes(userId).then((albumLikes) =>
    dispatch(receivedAllAlbumLikes(albumLikes))
  );

export const getAlbumLike = (userId, albumLikeId) => (dispatch) =>
  APIUtil.getAlbumLike(userId, albumLikeId).then((albumLike) =>
    dispatch(receivedAlbumLike(albumLike))
  );

export const postAlbumLike = (userId, albumLike) => (dispatch) =>
  APIUtil.postAlbumLike(userId, albumLike).then((albumLike) =>
    dispatch(receivedAlbumLike(albumLike))
  );

export const deleteAlbumLike = (userId, albumLikeId) => (dispatch) =>
  APIUtil.deleteAlbumLike(userId, albumLikeId).then((albumLikeId) =>
    dispatch(removedAlbumLike(albumLikeId))
  );

// TRACK LIKES

export const RECEIVED_ALL_TRACK_LIKES = 'RECEIVED_ALL_TRACK_LIKES';
export const RECEIVED_TRACK_LIKE = 'RECEIVED_TRACK_LIKE';
export const REMOVED_TRACK_LIKE = 'REMOVED_TRACK_LIKE';

export const receivedAllTrackLikes = (trackLikes) => ({
  type: RECEIVED_ALL_TRACK_LIKES,
  trackLikes,
});

export const receivedTrackLike = (trackLike) => ({
  type: RECEIVED_TRACK_LIKE,
  trackLike,
});

export const removedTrackLike = (trackLikeId) => ({
  type: REMOVED_TRACK_LIKE,
  trackLikeId,
});

export const getAllTrackLikes = (userId) => (dispatch) =>
  APIUtil.getAllTrackLikes(userId).then((trackLikes) =>
    dispatch(receivedAllTrackLikes(trackLikes))
  );

export const getTrackLike = (userId, trackLikeId) => (dispatch) =>
  APIUtil.getTrackLike(userId, trackLikeId).then((trackLike) =>
    dispatch(receivedTrackLike(trackLike))
  );

export const postTrackLike = (userId, trackLike) => (dispatch) =>
  APIUtil.postTrackLike(userId, trackLike).then((trackLike) =>
    dispatch(receivedTrackLike(trackLike))
  );

export const deleteTrackLike = (userId, trackLikeId) => (dispatch) =>
  APIUtil.deleteTrackLike(userId, trackLikeId).then((trackLikeId) =>
    dispatch(removedTrackLike(trackLikeId))
  );
