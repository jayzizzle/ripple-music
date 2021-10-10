import { connect } from 'react-redux';
import { clearSessionErrors, login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = state => ({
  errors: state.errors.session,
  formType: 'Log In'
});

const mDTP = dispatch => ({
  action: (user) => dispatch(login(user)),
  clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default connect(mSTP, mDTP)(SessionForm);