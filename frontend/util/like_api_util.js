// ALBUM LIKES

export const getAllAlbumLikes = (userId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/album_likes`,
  });
};

export const getAlbumLike = (userId, albumLikeId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/album_likes/${albumLikeId}`,
  });
};

export const postAlbumLike = (userId, albumLike) => {
  return $.ajax({
    method: 'POST',
    url: `/api/users/${userId}/album_likes`,
    data: { albumLike },
  });
};

export const deleteAlbumLike = (userId, albumLikeId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/users/${userId}/album_likes/${albumLikeId}`,
  });
};

// TRACK LIKES

export const getAllTrackLikes = (userId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/track_likes`,
  });
};

export const getTrackLike = (userId, trackLikeId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/track_likes/${trackLikeId}`,
  });
};

export const postTrackLike = (userId, trackLike) => {
  return $.ajax({
    method: 'POST',
    url: `/api/users/${userId}/track_likes`,
    data: { trackLike },
  });
};

export const deleteTrackLike = (userId, trackLikeId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/users/${userId}/track_likes/${trackLikeId}`,
  });
};
