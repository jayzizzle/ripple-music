import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Tracks } from '../tracks/tracks';
import { getAllTrackLikes } from '../../actions/like_actions';
import { postPlaylistTrack } from '../../actions/playlist_track_actions';
import {
  receivedNewPlaylist,
  addedSingleTracklist,
} from '../../actions/current_playlist_actions';
import { setToPlay } from '../../actions/ui_actions';

const mSTP = (state) => ({
  likedTracks: Object.values(state.entities.tracks),
  userId: state.session.id,
  likes: Object.entries(state.entities.likedTracks).reduce(
    (acc, [key, value]) => ((acc[value] = key), acc),
    {}
  ),
  playlists: Object.values(state.entities.playlists),
});

const mDTP = (dispatch) => ({
  getAllTrackLikes: (userId) => dispatch(getAllTrackLikes(userId)),
  postPlaylistTrack: (playlistTrack) =>
    dispatch(postPlaylistTrack(playlistTrack)),
  addedSingleTracklist: (track) => dispatch(addedSingleTracklist(track)),
  receivedNewPlaylist: (playlist) => dispatch(receivedNewPlaylist(playlist)),
  setToPlay: (playerStatus) => dispatch(setToPlay(playerStatus)),
});

export default withRouter(connect(mSTP, mDTP)(Tracks));
