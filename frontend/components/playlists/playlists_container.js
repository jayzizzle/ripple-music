import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Playlists } from '../playlists/playlists';
import {
  getAllPlaylists,
  postPlaylist,
  deletePlaylist,
  clearPlaylistErrors,
} from '../../actions/playlist_actions';

const mSTP = (state) => ({
  playlists: Object.values(state.entities.playlists),
  userId: state.session.id,
  errors: state.errors.playlist,
});

const mDTP = (dispatch) => ({
  getAllPlaylists: () => dispatch(getAllPlaylists()),
  postPlaylist: (playlist) => dispatch(postPlaylist(playlist)),
  deletePlaylist: (playlistId) => dispatch(deletePlaylist(playlistId)),
  clearPlaylistErrors: () => dispatch(clearPlaylistErrors()),
});

export default withRouter(connect(mSTP, mDTP)(Playlists));
