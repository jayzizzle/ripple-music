export const linkToSource = (sourceType, artistId, sourceId) => {
  switch (sourceType) {
    case 'albums':
      return `/artists/${artistId}/albums/${sourceId}`;
    case 'playlists':
      return `/playlists/${sourceId}`;
    case 'tracks':
      return '/tracks';
    default:
      return '/dashboard';
  }
};
