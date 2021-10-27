import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Main } from './main';

const mSTP = (state) => ({
  userId: state.session.id,
  user: state.entities.users[state.session.id],
});

const mDTP = (dispatch) => ({});

export default withRouter(connect(mSTP, null)(Main));
