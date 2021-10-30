import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Main } from './main';
import { clearAlbums } from '../../../actions/album_actions';
import { getAllFeatures } from '../../../actions/feature_actions';

const mSTP = (state) => ({
  userId: state.session.id,
  user: state.entities.users[state.session.id],
  albums: Object.values(state.entities.albums),
  albumLikes: Object.entries(state.entities.likedAlbums).reduce(
    (acc, [key, value]) => ((acc[value] = key), acc),
    {}
  ),
  artists: Object.values(state.entities.artists),
  follows: Object.entries(state.entities.followedArtists).reduce(
    (acc, [key, value]) => ((acc[value] = key), acc),
    {}
  ),
});

const mDTP = (dispatch) => ({
  getAllFeatures: () => dispatch(getAllFeatures()),
  clearAlbums: () => dispatch(clearAlbums()),
});

export default withRouter(connect(mSTP, mDTP)(Main));
