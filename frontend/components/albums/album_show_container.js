import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { AlbumShow } from '../albums/album_show';
import { getAlbum } from '../../actions/album_actions';
import { postPlaylistTrack } from '../../actions/playlist_track_actions';
import {
  receivedNewPlaylist,
  addedSingleTracklist,
} from '../../actions/current_playlist_actions';
import { setToPlay } from '../../actions/ui_actions';

const mSTP = (state, ownProps) => ({
  album: state.entities.albums[ownProps.match.params.albumId],
  artist: state.entities.artists[ownProps.match.params.artistId],
  tracks: Object.values(state.entities.tracks),
  userId: state.session.id,
  likedAlbums: Object.entries(state.entities.likedAlbums).reduce(
    (acc, [key, value]) => ((acc[value] = key), acc),
    {}
  ),
  likedTracks: Object.entries(state.entities.likedTracks).reduce(
    (acc, [key, value]) => ((acc[value] = key), acc),
    {}
  ),
  playlists: Object.values(state.entities.playlists),
});

const mDTP = (dispatch) => ({
  getAlbum: (albumId) => dispatch(getAlbum(albumId)),
  postPlaylistTrack: (playlistTrack) =>
    dispatch(postPlaylistTrack(playlistTrack)),
  addedSingleTracklist: (track) => dispatch(addedSingleTracklist(track)),
  receivedNewPlaylist: (playlist) => dispatch(receivedNewPlaylist(playlist)),
  setToPlay: (playerStatus) => dispatch(setToPlay(playerStatus)),
});

export default withRouter(connect(mSTP, mDTP)(AlbumShow));
