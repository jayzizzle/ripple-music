import { connect } from 'react-redux';
import HeartButton from './heart_button';
import { postAlbumLike, deleteAlbumLike } from '../../actions/like_actions';

const mSTP = (state) => ({
  userId: state.session.id,
});

const mDTP = (dispatch) => ({
  postHeart: (userId, albumLike) => dispatch(postAlbumLike(userId, albumLike)),
  deleteHeart: (userId, albumLikeId) =>
    dispatch(deleteAlbumLike(userId, albumLikeId)),
});

export default connect(mSTP, mDTP)(HeartButton);
