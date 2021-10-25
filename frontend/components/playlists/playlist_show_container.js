import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { PlaylistShow } from '../playlists/playlist_show';
import { getPlaylist } from '../../actions/playlist_actions';

const mSTP = (state, ownProps) => ({
  playlist: state.entities.playlists[ownProps.match.params.playlistId],
  userId: state.session.id,
  likedTracks: Object.entries(state.entities.likedTracks).reduce(
    (acc, [key, value]) => ((acc[value] = key), acc),
    {}
  ),
});

const mDTP = (dispatch) => ({
  getPlaylist: (playlistId) => dispatch(getPlaylist(playlistId)),
});

export default withRouter(connect(mSTP, mDTP)(PlaylistShow));
