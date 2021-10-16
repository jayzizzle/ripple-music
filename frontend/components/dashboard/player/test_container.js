import { connect } from 'react-redux';
import { Test } from './test';

const mSTP = (state) => ({
  currentPlaylist: Object.values(state.entities.currentPlaylist),
});

// const mDTP = dispatch => ({

// });

export default connect(mSTP, null)(Test);
