import { connect } from 'react-redux';
import { Test } from './test';
import { setToPlay, setToPause } from '../../../actions/ui_actions';
import { receivedCurrentTrack } from '../../../actions/current_playlist_actions';
import { getFeaturedPlaylist } from '../../../actions/feature_actions';

const mSTP = (state) => ({
  currentPlaylist: Object.values(state.entities.currentPlaylist),
  isCurrentlyPlaying: state.ui.isPlaying,
  currentSongIndex: state.entities.currentTrack.idx,
});

const mDTP = (dispatch) => ({
  setToPlay: (playerStatus) => dispatch(setToPlay(playerStatus)),
  setToPause: (playerStatus) => dispatch(setToPause(playerStatus)),
  receivedCurrentTrack: (currentTrack) =>
    dispatch(receivedCurrentTrack(currentTrack)),
  getFeaturedPlaylist: (albumId) => dispatch(getFeaturedPlaylist(albumId)),
});

export default connect(mSTP, mDTP)(Test);
