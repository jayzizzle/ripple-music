import { connect } from 'react-redux';
import { signup, clearSessionErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = state => ({
  errors: state.errors.session,
  formType: 'Sign Up'
});

const mDTP = dispatch => ({
  action: (user) => dispatch(signup(user)),
  clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default connect(mSTP, mDTP)(SessionForm);