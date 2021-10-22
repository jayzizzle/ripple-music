import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { AlbumShow } from '../albums/album_show';
import { getAlbum } from '../../actions/album_actions';

const mSTP = (state, ownProps) => ({
  album: state.entities.albums[ownProps.match.params.albumId],
  artist: state.entities.artists[ownProps.match.params.artistId],
  tracks: Object.values(state.entities.tracks),
  userId: state.session.id,
  likedAlbums: Object.entries(state.entities.likedAlbums).reduce(
    (acc, [key, value]) => ((acc[value] = key), acc),
    {}
  ),
  // likedTracks: Object.entries(state.entities.likedTracks).reduce(
  //   (acc, [key, value]) => ((acc[value] = key), acc),
  //   {}
  // ),
});

const mDTP = (dispatch) => ({
  getAlbum: (albumId) => dispatch(getAlbum(albumId)),
});

export default withRouter(connect(mSTP, mDTP)(AlbumShow));
