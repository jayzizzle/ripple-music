export const getAllFeatures = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/features',
  });
};

export const getFeaturedPlaylist = (albumId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/features/${albumId}`,
  });
};
