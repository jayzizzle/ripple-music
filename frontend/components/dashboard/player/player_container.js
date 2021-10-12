import { connect } from "react-redux";
import { Player } from "./player";

const mSTP = state => ({
  currentPlaylist: Object.values(state.entities.currentPlaylist),
});

// const mDTP = dispatch => ({

// });

export default connect(mSTP, null)(Player);