import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
  render() {
    return (
      <>
        <header className='flex-row-between vertical-center splash'>
          <h2>RIPPLE</h2>
          <div>
            <Link className='white-text-link' to='/login'>
              Log In
            </Link>
            <Link className='white-text-link' to='/signup'>
              <button className='white-btn'>Start Free Trial</button>
            </Link>
          </div>
        </header>
        <div className='splash-container'></div>
      </>
    );
  }
}

const mSTP = (state) => ({
  isLoggedIn: Boolean(state.session.id),
});

export default connect(mSTP)(Splash);
