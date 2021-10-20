import { connect } from 'react-redux';
import HeartButton from './heart_button';
import { postFollow, deleteFollow } from '../../actions/follow_actions';

const mSTP = (state) => ({
  userId: state.session.id,
});

const mDTP = (dispatch) => ({
  postHeart: (userId, follow) => dispatch(postFollow(userId, follow)),
  deleteHeart: (userId, followId) => dispatch(deleteFollow(userId, followId)),
});

export default connect(mSTP, mDTP)(HeartButton);
