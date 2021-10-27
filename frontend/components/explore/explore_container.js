import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Explore } from './explore';
import { clearAlbums } from '../../actions/album_actions';
import { getAllAlbums } from '../../actions/album_actions';
import { getAllArtists } from '../../actions/artist_actions';

const mSTP = (state) => ({
  userId: state.session.id,
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
  getAllAlbums: () => dispatch(getAllAlbums()),
  getAllArtists: () => dispatch(getAllArtists()),
  clearAlbums: () => dispatch(clearAlbums()),
});

export default withRouter(connect(mSTP, mDTP)(Explore));
