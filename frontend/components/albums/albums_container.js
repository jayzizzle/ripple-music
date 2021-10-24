import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Albums } from '../albums/albums';
import { clearAlbums } from '../../actions/album_actions';
import { getAllAlbumLikes } from '../../actions/like_actions';

const mSTP = (state) => ({
  likedAlbums: Object.values(state.entities.albums),
  userId: state.session.id,
  likes: Object.entries(state.entities.likedAlbums).reduce(
    (acc, [key, value]) => ((acc[value] = key), acc),
    {}
  ),
});

const mDTP = (dispatch) => ({
  getAllAlbumLikes: (userId) => dispatch(getAllAlbumLikes(userId)),
  clearAlbums: () => dispatch(clearAlbums()),
});

export default withRouter(connect(mSTP, mDTP)(Albums));
