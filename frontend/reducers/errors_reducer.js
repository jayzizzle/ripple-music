import { combineReducers } from 'redux';
import session from './errors/session_errors_reducer';
import playlist from './errors/playlist_errors_reducer';

export default combineReducers({
  session,
  playlist,
});
