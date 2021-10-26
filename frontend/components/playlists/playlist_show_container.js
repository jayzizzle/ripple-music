import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { PlaylistShow } from '../playlists/playlist_show';
import {
  getPlaylist,
  patchPlaylist,
  clearPlaylistErrors,
} from '../../actions/playlist_actions';

const mSTP = (state, ownProps) => ({
  playlist: state.entities.playlists[ownProps.match.params.playlistId],
  tracks: Object.values(state.entities.tracks),
  userId: state.session.id,
  likedTracks: Object.entries(state.entities.likedTracks).reduce(
    (acc, [key, value]) => ((acc[value] = key), acc),
    {}
  ),
  errors: state.errors.playlist,
});

const mDTP = (dispatch) => ({
  getPlaylist: (playlistId) => dispatch(getPlaylist(playlistId)),
  patchPlaylist: (playlist) => dispatch(patchPlaylist(playlist)),
  clearPlaylistErrors: () => dispatch(clearPlaylistErrors()),
  deletePlaylistTrack: (playlistTrackId) =>
    dispatch(deletePlaylistTrack(playlistTrackId)),
});

export default withRouter(connect(mSTP, mDTP)(PlaylistShow));
