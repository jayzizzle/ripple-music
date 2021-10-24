import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { ArtistShow } from '../artists/artist_show';
import { getArtist } from '../../actions/artist_actions';

const mSTP = (state, ownProps) => ({
  artist: state.entities.artists[ownProps.match.params.artistId],
  albums: Object.values(state.entities.albums),
  userId: state.session.id,
  follows: Object.entries(state.entities.followedArtists).reduce(
    (acc, [key, value]) => ((acc[value] = key), acc),
    {}
  ),
  likedAlbums: Object.entries(state.entities.likedAlbums).reduce(
    (acc, [key, value]) => ((acc[value] = key), acc),
    {}
  ),
});

const mDTP = (dispatch) => ({
  getArtist: (artistId) => dispatch(getArtist(artistId)),
});

export default withRouter(connect(mSTP, mDTP)(ArtistShow));
