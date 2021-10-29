export const RECEIVED_NEW_PLAYLIST = 'RECEIVED_NEW_PLAYLIST';
export const ADDED_TRACK_TO_PLAYLIST = 'ADDED_TRACK_TO_PLAYLIST';
export const REMOVED_TRACK_FROM_PLAYLIST = 'REMOVED_TRACK_FROM_PLAYLIST';
export const ADDED_SINGLE_TRACKLIST = 'ADDED_SINGLE_TRACKLIST';

export const receivedNewPlaylist = (playlist) => ({
  type: RECEIVED_NEW_PLAYLIST,
  playlist,
});

export const addedTrackToPlaylist = (track) => ({
  type: ADDED_TRACK_TO_PLAYLIST,
  track,
});

export const removedTrackFromPlaylist = (trackId) => ({
  type: REMOVED_TRACK_FROM_PLAYLIST,
  trackId,
});

export const addedSingleTracklist = (track, isTrue) => ({
  type: ADDED_SINGLE_TRACKLIST,
  track,
});
