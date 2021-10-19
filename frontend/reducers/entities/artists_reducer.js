import {
  RECEIVED_ALL_ARTISTS,
  RECEIVED_ARTIST,
} from '../../actions/artist_actions';
import { RECEIVED_ALL_FOLLOWS } from '../../actions/follow_actions';

const artistsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const newState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVED_ALL_ARTISTS:
      return { ...oldState, ...action.artists };
    case RECEIVED_ARTIST:
      newState[action.artist.artist.id] = action.artist.artist;
      return newState;
    case RECEIVED_ALL_FOLLOWS:
      return { ...action.follows.artists };
    default:
      return oldState;
  }
};

export default artistsReducer;
