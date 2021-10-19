import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Artists } from './artists';
import { getAllFollows } from '../../actions/follow_actions';

const mSTP = (state) => ({
  followedArtists: Object.values(state.entities.artists),
  userId: state.session.id,
  follows: Object.entries(state.entities.followedArtists).reduce(
    (acc, [key, value]) => ((acc[value] = key), acc),
    {}
  ),
});

const mDTP = (dispatch) => ({
  getAllFollows: (userId) => dispatch(getAllFollows(userId)),
});

export default withRouter(connect(mSTP, mDTP)(Artists));
