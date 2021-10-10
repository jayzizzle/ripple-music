import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom';

export default class SessionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGuestLogin = this.handleGuestLogin.bind(this);
  }

  componentWillUnmount() {
    this.props.clearSessionErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state)
      .then(() => this.props.history.push('/dashboard'))
  }

  update(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  renderErrors() {
    const { errors } = this.props;
    return(
      <ul>
        {errors.map((error, i) => (
          <li className='error' key={i}>
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

  handleGuestLogin(e) {
    e.preventDefault();
    this.props.login(this.props.guest)
      .then(() => this.props.history.push('/dashboard'));
  }

  render() {
    const { formType } = this.props;
    return (
      <div className='flex-col-center session-form-wrapper'>
        <h2>Ripple</h2>

        <div className='flex-row-center'>
          <NavLink to='/signup' exact className='' activeClassName=''>
            Sign Up
          </NavLink>&nbsp;
          <NavLink to='/login' exact className='' activeClassName=''>
            Log In
          </NavLink>
        </div>
        <div className='session-form-box'>
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
            <button className=''>{formType}</button>
            {this.renderErrors()}
          </form>

          <div className='flex-col-center'>
            <p>or</p>
            <button className='' onClick={this.handleGuestLogin}>
              <i className="fa-solid fa-key"></i>
              Continue as Guest
            </button>
          </div>

        </div>

      </div>
    )
  }
}
