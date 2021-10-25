export const getAllPlaylistTracks = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/playlist_tracks',
  });
};

export const getPlaylistTrack = (playlistTrackId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/playlist_tracks/${playlistTrackId}`,
  });
};

export const postPlaylistTrack = (playlistTrack) => {
  return $.ajax({
    method: 'POST',
    url: '/api/playlist_tracks',
    data: { playlistTrack },
  });
};

export const patchPlaylistTrack = (playlistTrack) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/playlist_tracks/${playlistTrack.id}`,
    data: { playlistTrack },
  });
};

export const deletePlaylistTrack = (playlistTrackId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/playlist_tracks/${playlistTrackId}`,
  });
};
