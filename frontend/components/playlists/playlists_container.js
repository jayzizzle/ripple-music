import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Playlists } from '../playlists/playlists';
import { getAllPlaylists, postPlaylist } from '../../actions/playlist_actions';

const mSTP = (state) => ({
  playlists: Object.values(state.entities.playlists),
  userId: state.session.id,
});

const mDTP = (dispatch) => ({
  getAllPlaylists: () => dispatch(getAllPlaylists()),
  postPlaylist: (playlist) => dispatch(postPlaylist(playlist)),
});

export default withRouter(connect(mSTP, mDTP)(Playlists));
