import * as APIUtil from '../util/like_api_util';

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
