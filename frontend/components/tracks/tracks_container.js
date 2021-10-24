import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Tracks } from '../tracks/tracks';
import { getAllTrackLikes } from '../../actions/like_actions';

const mSTP = (state) => ({
  likedTracks: Object.values(state.entities.tracks),
  userId: state.session.id,
  likes: Object.entries(state.entities.likedTracks).reduce(
    (acc, [key, value]) => ((acc[value] = key), acc),
    {}
  ),
});

const mDTP = (dispatch) => ({
  getAllTrackLikes: (userId) => dispatch(getAllTrackLikes(userId)),
});

export default withRouter(connect(mSTP, mDTP)(Tracks));
