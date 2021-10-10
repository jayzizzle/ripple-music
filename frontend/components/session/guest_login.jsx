import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';

class GuestLogin extends Component {
  constructor(props) {
    super(props);
    this.handleGuestLogin = this.handleGuestLogin.bind(this);
  }

  handleGuestLogin(e) {
    e.preventDefault();
    this.props.login(this.props.guest)
      .then(() => this.props.history.push('/dashboard'));
  }

  render() {
    return (
      <button className='session-form-btn outline-btn guest-login' onClick={this.handleGuestLogin}>
        <i className="fa-solid fa-key"></i>
        Continue as Guest
      </button>
    )
  }
}

const mSTP = state => ({
  guest: {username: 'spidey', password: 'parker'}
});

const mDTP = dispatch => ({
  login: (user) => dispatch(login(user))
});

export default connect(mSTP, mDTP)(GuestLogin);