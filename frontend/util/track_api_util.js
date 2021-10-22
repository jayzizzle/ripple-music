export const getAllTracks = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/tracks',
  });
};

export const getTrack = (trackId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/tracks/${trackId}`,
  });
};
