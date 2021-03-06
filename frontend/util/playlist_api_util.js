export const getAllPlaylists = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/playlists',
  });
};

export const getPlaylist = (playlistId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/playlists/${playlistId}`,
  });
};

export const postPlaylist = (playlist) => {
  return $.ajax({
    method: 'POST',
    url: '/api/playlists',
    data: { playlist },
  });
};

export const patchPlaylist = (playlist) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/playlists/${playlist.id}`,
    data: { playlist },
  });
};

export const deletePlaylist = (playlistId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/playlists/${playlistId}`,
  });
};
