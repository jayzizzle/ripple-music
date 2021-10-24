import * as APIUtil from '../util/album_api_util';

export const RECEIVED_ALL_ALBUMS = 'RECEIVED_ALL_ALBUMS';
export const RECEIVED_ALBUM = 'RECEIVED_ALBUM';
export const CLEARED_ALBUMS = 'CLEARED_ALBUMS';

export const receivedAllAlbums = (albums) => ({
  type: RECEIVED_ALL_ALBUMS,
  albums,
});

export const receivedAlbum = (album) => ({
  type: RECEIVED_ALBUM,
  album,
});

export const clearAlbums = () => ({
  type: CLEARED_ALBUMS,
});

export const getAllAlbums = () => (dispatch) =>
  APIUtil.getAllAlbums().then((albums) => dispatch(receivedAllAlbums(albums)));

export const getAlbum = (albumId) => (dispatch) =>
  APIUtil.getAlbum(albumId).then((album) => dispatch(receivedAlbum(album)));
