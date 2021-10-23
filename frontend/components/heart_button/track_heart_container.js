import { connect } from 'react-redux';
import HeartButton from './heart_button';
import { postTrackLike, deleteTrackLike } from '../../actions/like_actions';

const mSTP = (state) => ({
  userId: state.session.id,
});

const mDTP = (dispatch) => ({
  postHeart: (userId, trackLike) => dispatch(postTrackLike(userId, trackLike)),
  deleteHeart: (userId, trackLikeId) =>
    dispatch(deleteTrackLike(userId, trackLikeId)),
});

export default connect(mSTP, mDTP)(HeartButton);
