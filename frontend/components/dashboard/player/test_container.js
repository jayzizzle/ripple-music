import { connect } from 'react-redux';
import { Test } from './test';
import { getAlbum } from '../../../actions/album_actions';
import { setToPlay, setToPause } from '../../../actions/ui_actions';

const mSTP = (state) => ({
  currentPlaylist: Object.values(state.entities.currentPlaylist),
  albums: state.entities.albums,
  isCurrentlyPlaying: state.ui.isPlaying,
});

const mDTP = (dispatch) => ({
  getAlbum: (albumId) => dispatch(getAlbum(albumId)),
  setToPlay: (playerStatus) => dispatch(setToPlay(playerStatus)),
  setToPause: (playerStatus) => dispatch(setToPause(playerStatus)),
});

export default connect(mSTP, mDTP)(Test);
