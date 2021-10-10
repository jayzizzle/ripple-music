import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import GuestLogin from './guest_login';
import SessionFooter from './session_footer';

export default class SessionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearSessionErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state)
      .then(() => this.props.history.push('/dashboard'));
  }

  update(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  renderErrors() {
    const { errors } = this.props;
    return(
      <ul className='session-errors'>
        {errors.map((error, i) => (
          <li className='' key={i}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  renderEmailInput() {
    return(
      <>
        <label className='session-label'>Enter Email
          <br />
          <input 
            type='email' 
            placeholder='Enter Email' 
            value={this.state.email} 
            onChange={this.update('email')} 
            autoComplete='email' 
            className='session-input-text'
          />
        </label>
        <br />
      </>
    )
  }

  render() {
    const { formType } = this.props;
    return (
      <>
        <div className='flex-col-center session-form-wrapper'>
          <Link to='/'>
            <h2 className='session-header'>RIPPLE</h2>
          </Link>
          <div className='flex-row-center'>
            <NavLink to='/signup' exact className='session-link' activeClassName='session-active'>
              <h3 className='horizontal-padding'>Sign Up</h3>
            </NavLink>&nbsp;
            <NavLink to='/login' exact className='session-link' activeClassName='session-active'>
              <h3 className='horizontal-padding'>Log In</h3>
            </NavLink>
          </div>
          <div className='session-form-outer flex-col-center'>
            <div className='session-form-inner felx-col-center'>
              <form onSubmit={this.handleSubmit} className='flex-col-center'>
                <label className='session-label'>Enter Username
                  <br />
                  <input 
                    type='text' 
                    placeholder='Enter Username'
                    value={this.state.username} 
                    onChange={this.update('username')}
                    autoComplete='username'
                    className='session-input-text'
                  />
                </label>
                <br />
                {formType === 'Sign Up' ? this.renderEmailInput() : null}
                <label className='session-label'>Enter Password
                  <br />
                  <input 
                    type='password' 
                    placeholder='Enter Password'
                    value={this.state.password} 
                    onChange={this.update('password')} 
                    autoComplete={ formType === 'Sign Up' ? 'new-password' : 'current-password' }
                    className='session-input-text'
                  />
                </label>
                <br />
                <button className='session-form-btn cyan-btn'>{formType}</button>
                {this.renderErrors()}
              </form>

              <div className='flex-col-center'>
                <p>or</p>
                <GuestLogin history={this.props.history} />
              </div>
            </div>
          </div>

        </div>
        <SessionFooter />
      </>
    )
  }
}
