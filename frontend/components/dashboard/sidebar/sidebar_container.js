import { connect } from 'react-redux';
import { getUser, logout } from '../../../actions/session_actions';
import Sidebar from './sidebar';

const mSTP = (state) => ({
  user: state.entities.users[state.session.id],
  userId: state.session.id,
});

const mDTP = (dispatch) => ({
  getUser: (userId) => dispatch(getUser(userId)),
  logout: () => dispatch(logout()),
});

export default connect(mSTP, mDTP)(Sidebar);
