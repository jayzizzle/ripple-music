import { connect } from 'react-redux';
import { Test } from './test';
import { getAlbum } from '../../../actions/album_actions';

const mSTP = (state) => ({
  currentPlaylist: Object.values(state.entities.currentPlaylist),
  albums: state.entities.albums,
});

const mDTP = (dispatch) => ({
  getAlbum: (albumId) => dispatch(getAlbum(albumId)),
});

export default connect(mSTP, null)(Test);
